import { Button } from "@/components/ui/button";
import { FieldError, Label } from "@/components/ui/field";
import { Input, TextArea, TextField } from "@/components/ui/textfield";
import { type ContactFormInput, contactFormZodObj } from "@/utils/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { PaperPlaneTiltIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { Form } from "react-aria-components";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { env } from "../../env.js";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm<ContactFormInput>({
    resolver: zodResolver(contactFormZodObj),
  });

  const handleContactFieldChange = () => {
    if (errors.email) {
      trigger(["email", "telegram", "twitter", "otherSocial"]);
    }
  };

  const submit = async (input: ContactFormInput) => {
    setIsSubmitting(true);

    try {
      const response = await fetch(`${env.VITE_API_BASE_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        toast.success(
          "Message sent successfully! I'll get back to you soon ^^",
        );
        reset();
      } else {
        toast.error(
          data.message || "Failed to send message. Please try again.",
        );
      }
    } catch (err) {
      console.error("Contact form error:", err);
      toast.error(
        "Network error *_*. Please check your connection and try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      onSubmit={handleSubmit(submit)}
      className="mx-auto flex w-full max-w-5xl flex-col items-stretch justify-start gap-3 rounded-lg border border-border/35 bg-card/50 px-4 py-6 font-serif backdrop-blur-[3px]"
    >
      <TextField
        name="name"
        type="text"
        isInvalid={!!errors.name}
        className="w-1/2 max-md:w-full"
      >
        <Label className="font-serif text-lg">Name</Label>
        <Input
          id="name"
          {...register("name")}
          placeholder="What should I refer to you as?"
          className="mt-1 w-full bg-input/10 text-lg placeholder:text-foreground/50"
        />
        {errors.name && (
          <FieldError className="mt-1">{errors.name.message}</FieldError>
        )}
      </TextField>

      <div>
        <span className="font-serif text-lg">
          Provide atleast one of either socials
        </span>
        <div className="grid grid-cols-2 grid-rows-2 gap-3 max-md:flex max-md:flex-col">
          <TextField
            name="email"
            type="text"
            isInvalid={!!errors.email}
            className="w-full"
          >
            <Label className="font-serif text-lg">Email</Label>
            <Input
              id="email"
              {...register("email")}
              onChange={(e) => {
                register("email").onChange(e);
                handleContactFieldChange();
              }}
              placeholder="eg. xyz@gmail.com"
              className="mt-1 w-full bg-input/10 text-lg placeholder:text-foreground/50"
            />
            {errors.email && (
              <FieldError className="mt-1">{errors.email.message}</FieldError>
            )}
          </TextField>

          <TextField
            name="telegram"
            type="text"
            isInvalid={!!errors.telegram}
            className="w-full"
          >
            <Label className="font-serif text-lg">Telegram</Label>
            <Input
              id="telegram"
              {...register("telegram")}
              onChange={(e) => {
                register("telegram").onChange(e);
                handleContactFieldChange();
              }}
              placeholder="eg. finisus or https://telegram.me/finisus"
              className="mt-1 w-full bg-input/10 text-lg placeholder:text-foreground/50"
            />
            {errors.telegram && (
              <FieldError className="mt-1">
                {errors.telegram.message}
              </FieldError>
            )}
          </TextField>

          <TextField
            name="twitter"
            type="text"
            isInvalid={!!errors.twitter}
            className="w-full"
          >
            <Label className="font-serif text-lg">Twitter/X</Label>
            <Input
              id="twitter"
              {...register("twitter")}
              onChange={(e) => {
                register("twitter").onChange(e);
                handleContactFieldChange();
              }}
              placeholder="eg. finisuss or https://x.com/finisuss"
              className="mt-1 w-full bg-input/10 text-lg placeholder:text-foreground/50"
            />
            {errors.twitter && (
              <FieldError className="mt-1">{errors.twitter.message}</FieldError>
            )}
          </TextField>

          <TextField
            name="otherSocial"
            type="text"
            isInvalid={!!errors.otherSocial}
            className="w-full"
          >
            <Label className="font-serif text-lg">
              Other Social (With platform name if providing a username)
            </Label>
            <Input
              id="otherSocial"
              {...register("otherSocial")}
              onChange={(e) => {
                register("otherSocial").onChange(e);
                handleContactFieldChange();
              }}
              placeholder="id w/ platform or link to profile"
              className="mt-1 w-full bg-input/10 text-lg placeholder:text-foreground/50"
            />
            {errors.otherSocial && (
              <FieldError className="mt-1">
                {errors.otherSocial.message}
              </FieldError>
            )}
          </TextField>
        </div>
      </div>

      <TextField
        name="message"
        type="text"
        isInvalid={!!errors.message}
        className="w-full"
      >
        <Label className="font-serif text-lg">Message</Label>
        <TextArea
          id="message"
          {...register("message")}
          placeholder="eg. A short description explaining your needs or a simple message highlighting interest in getting me to build for you."
          className="mt-1 min-h-32 w-full bg-input/10 text-lg placeholder:text-foreground/50"
        />
        {errors.message && (
          <FieldError className="mt-1">{errors.message.message}</FieldError>
        )}
      </TextField>

      <div className="mx-auto pt-3">
        <Button
          type="submit"
          variant="outline"
          size="sm"
          className="w-21 gap-2 shadow-xs"
          isDisabled={isSubmitting}
        >
          <PaperPlaneTiltIcon size={13} weight="regular" />
          <span>{isSubmitting ? "..." : "Submit"}</span>
        </Button>
      </div>
    </Form>
  );
}
