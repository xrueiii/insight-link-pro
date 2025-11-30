import Link from "next/link";
import { JSX, SVGProps } from "react";

export type NavItemProps = {
  label: string;
  href: string;
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
};

export function NavItem({ label, href, icon: Icon }: NavItemProps) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 rounded-lg px-3 py-2 transition hover:bg-slate-100"
    >
      <Icon className="h-5 w-5 text-slate-600" />
      {label}
    </Link>
  );
}
