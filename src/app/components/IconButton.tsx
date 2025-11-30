import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export function IconButton({ children, className, ...props }: Props) {
  return (
    <button
      className={clsx(
        "inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-sm hover:bg-slate-100 transition",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
