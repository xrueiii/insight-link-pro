import { IconButton } from "@/app/components/IconButton";

export function ChatInput() {
  return (
    <div className="mt-auto rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
      <p className="text-sm text-slate-500">What would you like to know?</p>

      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-3 text-slate-500">
          <IconButton>+</IconButton>
          <IconButton>{"</>"}</IconButton>
          <IconButton>🎤</IconButton>
        </div>

        <IconButton className="text-slate-400">↑</IconButton>
      </div>
    </div>
  );
}
