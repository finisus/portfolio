import { Button } from "@/components/ui/button";
import { FieldError, Label } from "@/components/ui/field";
import { Input, TextArea, TextField } from "@/components/ui/textfield";
import { type ContactFormInput, contactFormZodObj } from "@/utils/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { PaperPlaneTiltIcon } from "@phosphor-icons/react";
import { type SetStateAction } from "react";
import { Form } from "react-aria-components";
import { useForm } from "react-hook-form";
import { type FormState, type UseFormRegister } from "react-hook-form";
import { toast } from "sonner";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormInput>({
    resolver: zodResolver(contactFormZodObj),
  });

  const submit = (input: ContactFormInput) => {};

  return (
    <Form
      onSubmit={handleSubmit(submit)}
      className="mx-auto flex w-full max-w-5xl flex-col items-stretch justify-start gap-3 rounded-lg border border-border/35 bg-card/50 px-4 py-6 font-serif shadow-md backdrop-blur-[3px]"
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
          required
        />
        {errors.email && (
          <FieldError className="mt-1">{errors.email.message}</FieldError>
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
              Other Social (With name of platform if providing a username)
            </Label>
            <Input
              id="otherSocial"
              {...register("otherSocial")}
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
        {errors.email && (
          <FieldError className="mt-1">{errors.email.message}</FieldError>
        )}
      </TextField>

      <div className="mx-auto pt-3">
        <Button
          type="submit"
          variant="outline"
          size="sm"
          className="gap-2 shadow-xs"
          // isDisabled={isSubmitting}
        >
          <PaperPlaneTiltIcon size={13} weight="regular" />
          Submit
          {/* <span>{isSubmitting ? "..." : "Submit"}</span> */}
        </Button>
      </div>
    </Form>
  );
}
