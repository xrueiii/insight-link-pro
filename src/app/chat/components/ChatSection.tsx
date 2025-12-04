"use client";

import { useEffect, useRef, useState } from "react";
import { askAI } from "../lib/askAI";
import { ChatInput } from "./ChatInput";
import { ChatMessages } from "./ChatMessages";

type Message = {
  role: "user" | "assistant";
  content: string;
};

type Props = {
  onPromptChange: (prompt: string) => void;
};

export function ChatSection({ onPromptChange }: Props) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [typing, setTyping] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);

  // 🔽 自動捲到底（每次訊息變時）
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const handleSend = async (msg: string) => {
    // 加入使用者訊息
    setMessages((prev) => [...prev, { role: "user", content: msg }]);

    setTyping(true);

    try {
      // 用你的 server-side 代理呼叫 OpenAI
      const reply = await askAI(msg);

      // 加入 AI 回覆
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "⚠️ Failed to connect to AI." },
      ]);
    }

    setTyping(false);
  };

  return (
    <section className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm h-full">
      <h1 className="text-2xl font-semibold text-black">AI Assistant</h1>

      <div className="flex-1 flex flex-col gap-3 overflow-y-auto pr-2">
        <ChatMessages messages={messages} typing={typing} />
        <div ref={bottomRef} />
      </div>

      <ChatInput onSend={handleSend} onPromptChange={onPromptChange} />
    </section>
  );
}
