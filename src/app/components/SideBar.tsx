import { NavItem } from "@/app/components/NavItem";
import { ChatIcon } from "./icons/ChatIcon";
import { DashboardIcon } from "./icons/DashboardIcon";
import { LibraryIcon } from "./icons/LibraryIcon";
import { LogoIcon } from "./icons/LogoIcon";

export function Sidebar() {
  return (
    <aside className="flex w-64 flex-col border-r border-slate-200 bg-white px-6 py-8">
      <div className="mb-10 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white">
          <LogoIcon className="h-6 w-6" />
        </div>
        <span className="text-lg font-semibold tracking-tight text-black">
          InsightLink+
        </span>
      </div>

      <nav className="space-y-1 text-sm font-medium text-slate-700">
        <NavItem label="Chat" href="/chat" icon={ChatIcon} />
        <NavItem label="Library" href="/library" icon={LibraryIcon} />
        <NavItem label="Dashboard" href="/dashboard" icon={DashboardIcon} />
      </nav>
    </aside>
  );
}
