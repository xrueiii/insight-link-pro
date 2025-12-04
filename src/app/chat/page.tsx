"use client";

import { useState } from "react";
import { ChatSection } from "./components/ChatSection";
import { SidePanel } from "./components/SidePanel";

export default function ChatPage() {
  const [selectedPrompt, setSelectedPrompt] = useState("custom");

  return (
    <div className="grid h-screen grid-cols-1 gap-6 px-8 py-8 lg:grid-cols-[1.1fr_0.9fr] bg-white">
      <ChatSection onPromptChange={setSelectedPrompt} />
      <SidePanel promptKey={selectedPrompt} />
    </div>
  );
}
