import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export function IconButton({ children, className, ...props }: Props) {
  return (
    <button
      className={clsx(
        "cursor-pointer inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-sm hover:bg-slate-100 transition bg-black",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
