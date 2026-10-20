import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-[4px] border-2 border-transparent font-bold leading-[1.1] whitespace-nowrap transition-colors outline-none select-none focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-navy disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-[18px]",
  {
    variants: {
      variant: {
        default: "bg-red-ink text-white hover:bg-red-hover",
        "outline-light":
          "border-white/70 bg-transparent text-white hover:bg-white/10 focus-visible:outline-white",
        light:
          "bg-white text-red-ink hover:bg-red-soft focus-visible:outline-white",
        facebook: "bg-facebook text-white hover:bg-[#125fc4]",
        ghost: "text-navy hover:bg-surface",
        link: "text-navy underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-5 text-[0.95rem]",
        sm: "h-9 px-4 text-[0.85rem] uppercase tracking-[0.5px] font-extrabold",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
