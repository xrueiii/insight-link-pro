import { ReactNode } from "react";

export function IconButton({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-sm ${className}`}
    >
      {children}
    </span>
  );
}
