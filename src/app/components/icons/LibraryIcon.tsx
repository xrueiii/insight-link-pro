import { SVGProps } from "react";

export function LibraryIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path d="M5 5h14v6H5z" />
      <path d="M5 13h14v6H5z" />
    </svg>
  );
}
