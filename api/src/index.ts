import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { rateLimiter } from "hono-rate-limiter";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { z } from "zod";
import { env } from "../env.js";
import { contactApiZodObj } from "./utils/types.js";

const app = new Hono();

app.use("*", logger());

app.use(
  "*",
  cors({
    origin: env.CORS_ORIGIN,
    allowHeaders: ["Content-Type"],
    allowMethods: ["GET", "POST", "OPTIONS"],
    credentials: false,
  }),
);

app.get("/", (c) => {
  return c.json({
    message: `Hello Hono! from ${env.PORT}`,
    status: "running",
    endpoint: {
      health: "/health",
      contact: "/contact",
    },
  });
});

app.get("/health", (c) => {
  return c.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

app.onError((err, c) => {
  console.error("Server error:", err);
  return c.json(
    {
      error: "Internal Server Error",
      message:
        env.NODE_ENV === "development" ? err.message : "Something went wrong",
    },
    500,
  );
});

app.notFound((c) => {
  return c.json({ error: "Not Found" }, 404);
});

app.use(
  "/contact",
  rateLimiter({
    windowMs: 10 * 60 * 1000, // 10 minute
    limit: 5,
    standardHeaders: true,
    keyGenerator: (c) => {
      const forwarded = c.req.header("x-forwarded-for");
      const realIp = c.req.header("x-real-ip");
      return forwarded?.split(",")[0] || realIp || "unknown";
    },
  }),
);
app.post("/contact", async (c) => {
  try {
    const body = await c.req.json();
    const validated = contactApiZodObj.parse(body);

    const socials = [
      validated.email && `Email: ${validated.email}`,
      validated.telegram && `Telegram: ${validated.telegram}`,
      validated.twitter && `Twitter/X: ${validated.twitter}`,
      validated.otherSocial && `Other Social: ${validated.otherSocial}`,
    ]
      .filter(Boolean)
      .join("\n");

    const emailBody = `
<p><strong>Name:</strong> ${validated.name}</p>

<p><strong>Contact Methods:</strong><br>
${socials.replace(/\n/g, "<br>")}</p>

<p><strong>Message:</strong><br>
${validated.message.replace(/\n/g, "<br>")}</p>
`.trim();

    const response = await fetch("https://api.useplunk.com/v1/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${env.PLUNK_SECRET}`,
      },
      body: JSON.stringify({
        to: env.CONTACT_EMAIL,
        subject: `Inbound via contact form: ${validated.name}`,
        body: emailBody,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("Plunk API error:", error);
      throw new Error("Failed to send email.");
    }

    return c.json({ success: true, message: "Message sent successfully." });
  } catch (err) {
    console.error("Contact form error:", err);

    if (err instanceof z.ZodError) {
      return c.json(
        {
          success: false,
          message: `Failed to send message: Validation failed, please check your inputs.`,
          errors: err.issues,
        },
        400,
      );
    }

    return c.json(
      {
        success: false,
        message: "Failed to send message. Please try again.",
      },
      500,
    );
  }
});

serve(
  {
    fetch: app.fetch,
    port: Number(env.PORT),
  },
  (info) => {
    console.log(`Server is running on http://localhost:${String(info.port)}`);
    console.log(`Health check: http://localhost:${info.port}/health`);
    console.log(`Environment: ${env.NODE_ENV}`);
    console.log(`CORS Origin: ${env.CORS_ORIGIN}`);
  },
);
