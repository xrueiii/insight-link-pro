"use client";

import { useEffect, useRef } from "react";
import { MessageBubble } from "./MessageBubble";
import { TypingIndicator } from "./TypingIndicator";

type Message = {
  role: "user" | "assistant";
  content: string;
};

type Props = {
  messages: Message[];
  typing: boolean;
};

export function ChatMessages({ messages, typing }: Props) {
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  return (
    <div className="flex flex-col gap-3 overflow-y-auto max-h-[500px] pr-2">
      {messages.map((m, i) => (
        <MessageBubble key={i} role={m.role}>
          {m.content}
        </MessageBubble>
      ))}

      {typing && <TypingIndicator />}

      <div ref={bottomRef} />
    </div>
  );
}
