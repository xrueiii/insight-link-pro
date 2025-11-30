"use client";

import { IconButton } from "@/app/components/IconButton";
import { KeyboardEvent, useState } from "react";

type Props = {
  onSend: (msg: string) => void;
};

export function ChatInput({ onSend }: Props) {
  const [text, setText] = useState("");

  const send = () => {
    if (!text.trim()) return;
    onSend(text);
    setText("");
  };

  const handleKey = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <textarea
        className="w-full text-black resize-none rounded-lg bg-slate-50 px-3 py-2 text-sm focus:ring-2 focus:ring-slate-300 outline-none"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKey}
        rows={1}
        placeholder="Message the AI..."
      />

      <div className="mt-3 flex justify-end text-black">
        <IconButton onClick={send}>↑</IconButton>
      </div>
    </div>
  );
}
