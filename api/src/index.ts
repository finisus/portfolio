import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { env } from "../env.js";

const app = new Hono();

app.get("/", (c) => {
  return c.json({
    message: `Hello Hono! from ${env.PORT}`,
    status: "running",
    endpoint: {
      health: "/health",
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
