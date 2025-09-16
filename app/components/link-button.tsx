import { cn } from "../utils/cn.ts";

type Props = React.ComponentPropsWithoutRef<"a"> & {
  variant?: "primary" | "secondary";
  className?: string;
  children: React.ReactNode;
};

export const LinkButton = (
  { variant = "primary", className, children, ...props }: Props,
) => {
  return (
    <a
      className={cn(
        "px-8 py-4 rounded-full border-2 transition-all border-blue-600",
        variant === "primary" &&
          "bg-blue-600 text-white hover:bg-white hover:text-blue-600",
        variant === "secondary" &&
          "bg-white text-blue-600 hover:bg-blue-600 hover:text-white",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
};
