import { cn } from "@/utils/cn";
import { type VariantProps, cva } from "class-variance-authority";
import {
  Button as AriaButton,
  type ButtonProps as AriaButtonProps,
  composeRenderProps,
} from "react-aria-components";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium font-serif transition-colors cursor-pointer",
    /* Disabled */
    "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
    /* Focus Visible */
    "data-[focus-visible]:outline-none data-[focus-visible]:ring-1 data-[focus-visible]:ring-ring",
    /* Resets */
    "focus-visible:outline-none",
  ],
  {
    variants: {
      variant: {
        default:
          "border border-primary/70 bg-primary/50 text-primary-foreground data-[hovered]:bg-primary/70 data-[pressed]:bg-primary/60 backdrop-blur-[3px]",
        destructive:
          "border border-destructive/70 bg-destructive/50 text-foreground data-[hovered]:bg-destructive/70 data-[pressed]:bg-destructive/60 backdrop-blur-[3px]",
        outline:
          "border border-input/70 bg-card/50 data-[hovered]:bg-accent/70 data-[hovered]:text-accent-foreground data-[pressed]:bg-accent/60 backdrop-blur-[3px]",
        secondary:
          "border border-secondary-foreground/70 bg-secondary/50 text-secondary-foreground data-[hovered]:bg-secondary/70 data-[pressed]:bg-secondary/60 backdrop-blur-[3px]",
        ghost:
          "border border-transparent data-[hovered]:border-input data-[hovered]:bg-accent/70 data-[hovered]:text-accent-foreground data-[pressed]:bg-accent/60 transition-all data-[hovered]:backdrop-blur-[3px] data-[pressed]:backdrop-blur-[3px]",
        link: "text-foreground dark:text-primary underline-offset-4 data-[hovered]:underline data-[pressed]:text-primary/80",
      },
      size: {
        icon_xs: "size-7",
        icon_sm: "size-8",
        icon: "size-9",
        icon_lg: "size-10",
        xs: "px-2 h-7 text-sm",
        sm: "px-2.5 h-8 text-base",
        default: "px-3 h-9 text-base",
        lg: "px-3.5 h-10 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

interface ButtonProps
  extends AriaButtonProps,
    VariantProps<typeof buttonVariants> {}

const Button = ({ className, variant, size, ...props }: ButtonProps) => {
  return (
    <AriaButton
      className={composeRenderProps(className, (cls) =>
        cn(
          buttonVariants({
            variant,
            size,
            className: cls,
          }),
        ),
      )}
      {...props}
    />
  );
};

export { Button, buttonVariants };
export type { ButtonProps };
