"use client";

import { useEffect, useRef, useState } from "react";
import { ChatInput } from "./ChatInput";
import { ChatMessages } from "./ChatMessages";

type Message = {
  role: "user" | "assistant";
  content: string;
};

type Props = {
  onPromptChange: (prompt: string) => void;
  onArticleAnalyzed: (articleId: string) => void; // ⭐ 新增：讓 SidePanel 切換模式
};

export function ChatSection({ onPromptChange, onArticleAnalyzed }: Props) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [typing, setTyping] = useState(false);
  const [articleText, setArticleText] = useState<string | null>(null); // ⭐ 儲存上傳的 txt

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  // ⭐ 偽造分析（不用 AI）
  const handleSend = async (msg: string) => {
    // 顯示使用者輸入
    setMessages((prev) => [...prev, { role: "user", content: msg }]);

    // 如果有上傳文章 → 顯示文章節錄
    if (articleText) {
      const snippet =
        articleText.length > 600
          ? articleText.slice(0, 600) + "..."
          : articleText;

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: snippet,
        },
      ]);
    }

    // ⭐ 假裝正在思考
    setTyping(true);

    // 10 秒後回覆分析完成
    setTimeout(() => {
      setTyping(false);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Alreadty analyzed the article as requested.",
        },
      ]);

      // ⭐ 通知外層（Page.tsx）SidePanel 應切到 analysis mode
      // 我們用 article-1 作為 hardcode demo
      onArticleAnalyzed("article-1");
    }, 10000);
  };

  return (
    <section className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm h-full">
      <h1 className="text-2xl font-semibold text-black">AI-driven Analysis</h1>

      <div className="flex-1 flex flex-col gap-3 overflow-y-auto pr-2">
        <ChatMessages messages={messages} typing={typing} />
        <div ref={bottomRef} />
      </div>

      {/* ⭐ 把 setArticleText 傳給 ChatInput（用於讀檔案） */}
      <ChatInput
        onSend={handleSend}
        onPromptChange={onPromptChange}
        onFileLoaded={(text) => {
          console.log("File loaded: ", text);
          setArticleText(text);
        }}
      />
    </section>
  );
}
