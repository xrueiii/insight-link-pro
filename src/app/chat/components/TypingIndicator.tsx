export function TypingIndicator() {
  return (
    <div className="self-start flex gap-1 px-4 py-2 rounded-2xl bg-slate-100">
      <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" />
      <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce delay-150" />
      <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce delay-300" />
    </div>
  );
}
