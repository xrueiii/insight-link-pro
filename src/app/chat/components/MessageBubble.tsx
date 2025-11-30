import clsx from "clsx";

type Props = {
  role: "user" | "assistant";
  children: string;
};

export function MessageBubble({ role, children }: Props) {
  const isUser = role === "user";

  return (
    <div
      className={clsx(
        "max-w-lg px-4 py-2 rounded-2xl text-sm leading-6",
        isUser
          ? "self-end bg-slate-900 text-white"
          : "self-start bg-slate-100 text-slate-900"
      )}
    >
      {children}
    </div>
  );
}
