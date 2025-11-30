import { SVGProps } from "react";

export function ChatIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path d="M4 4h16v12H4z" />
      <path d="M9 20h6" />
      <path d="M9 16v4" />
      <path d="M15 16v4" />
    </svg>
  );
}
