"use client";

import { useState } from "react";
import { AIResponse } from "./AIResponse";
import { ChatInput } from "./ChatInput";

export function ChatSection() {
  const [hasKey] = useState(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("agent_api_key") !== null;
  });

  if (!hasKey) {
    return (
      <section className="flex flex-col justify-center items-center rounded-2xl border border-slate-200 bg-white p-8 shadow-sm text-center">
        <h2 className="text-lg font-medium text-slate-700">
          Please enter your API Key on the right panel to start chatting.
        </h2>
      </section>
    );
  }

  return (
    <section className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <h1 className="text-2xl font-semibold text-black">AI-driven Analysis</h1>

      {/* 未來聊天內容 */}
      <AIResponse />

      <ChatInput />
    </section>
  );
}
