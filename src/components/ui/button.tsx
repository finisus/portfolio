import { cn } from "@/utils/cn";
import { type VariantProps, cva } from "class-variance-authority";
import {
  Button as AriaButton,
  type ButtonProps as AriaButtonProps,
  composeRenderProps,
} from "react-aria-components";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors cursor-pointer",
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
          "border border-primary bg-primary/90 text-primary-foreground data-[hovered]:bg-primary data-[pressed]:bg-primary/80 backdrop-blur-[3px]",
        destructive:
          "border border-destructive bg-destructive/80 text-foreground data-[hovered]:bg-destructive data-[pressed]:bg-destructive/70 backdrop-blur-[3px]",
        outline:
          "border border-input bg-card/80 data-[hovered]:bg-accent/90 data-[hovered]:text-accent-foreground data-[pressed]:bg-accent/70 backdrop-blur-[3px]",
        secondary:
          "border border-secondary-foreground/75 bg-secondary/75 text-secondary-foreground data-[hovered]:bg-secondary data-[pressed]:bg-secondary/50 backdrop-blur-[3px]",
        ghost:
          "border border-transparent data-[hovered]:border-input data-[hovered]:bg-accent/90 data-[hovered]:text-accent-foreground data-[pressed]:bg-accent/70 transition-all data-[hovered]:backdrop-blur-[3px] data-[pressed]:backdrop-blur-[3px]",
        link: "text-primary underline-offset-4 data-[hovered]:underline data-[pressed]:text-primary/80",
      },
      size: {
        icon_xs: "size-7",
        icon_sm: "size-8",
        icon: "size-9",
        icon_lg: "size-10",
        xs: "px-2 h-7 text-xs",
        sm: "px-2.5 h-8 text-sm",
        default: "px-3 h-9 text-sm",
        lg: "px-3.5 h-10 text-base",
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
