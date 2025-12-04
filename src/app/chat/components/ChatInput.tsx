"use client";

import { IconButton } from "@/app/components/IconButton";
import {
  ArrowUpTrayIcon,
  ChevronUpIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { KeyboardEvent, useRef, useState } from "react";

type Props = {
  onSend: (msg: string) => void;
  onPromptChange: (prompt: string) => void;
  onFileLoaded: (text: string) => void; // ⭐ 新增
};

export function ChatInput({ onSend, onPromptChange, onFileLoaded }: Props) {
  const [text, setText] = useState("");
  const [fileName, setFileName] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [selectedPrompt, setSelectedPrompt] = useState("custom");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const promptOptions = [
    "racism type",
    "entity type",
    "reaction",
    "emotion",
    "custom",
  ];

  const autoResize = () => {
    const el = textareaRef.current;
    if (!el) return;

    el.style.height = "auto";
    el.style.height = `${el.scrollHeight}px`;
  };

  const send = () => {
    if (!text.trim()) return;
    onSend(text);
    setText("");

    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  };

  const handleKey = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 space-y-3 relative">
      {/* Textarea */}
      <div className="flex items-center bg-slate-50 rounded-lg px-3 py-2">
        <textarea
          ref={textareaRef}
          className="w-full text-black resize-none bg-transparent text-sm outline-none leading-[1.8] overflow-hidden max-h-[100px] overflow-y-auto"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            autoResize();
          }}
          onKeyDown={handleKey}
          rows={1}
          placeholder="Input the article..."
        />
      </div>

      {/* upload + dropdown + send */}
      <div className="flex items-center justify-between px-1 relative">
        <div className="flex items-center justify-between px-1 relative gap-3">
          {/* ⭐ Upload Button */}
          <label className="flex items-center gap-1 cursor-pointer text-slate-600 hover:text-black">
            <ArrowUpTrayIcon className="w-5 h-5" />

            <input
              type="file"
              accept=".txt"
              className="hidden"
              onChange={async (e) => {
                const file = e.target.files?.[0];
                if (!file) return;

                const text = await file.text(); // ⭐ 讀取內容
                setFileName(file.name);
                onFileLoaded(text); // ⭐ 傳回 ChatSection
              }}
            />
          </label>

          {/* ---- File name preview ---- */}
          {fileName && (
            <div className="flex items-center gap-2 bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded-md">
              <span>{fileName}</span>
              <XMarkIcon
                className="w-4 h-4 cursor-pointer hover:text-black"
                onClick={() => {
                  setFileName(null);
                  onFileLoaded(""); // 清空
                }}
              />
            </div>
          )}

          {/* Dropdown */}
          <div
            className="flex items-center border border-black rounded-full px-4 py-1 cursor-pointer select-none text-black hover:bg-gray-100"
            onClick={() => setOpenDropdown(!openDropdown)}
          >
            <span className="text-sm text-black">{selectedPrompt}</span>
            <ChevronUpIcon className="w-4 h-4 ml-1" />
          </div>

          {/* Drop-up Menu */}
          {openDropdown && (
            <div className="absolute left-1/2 -translate-x-1/2 bottom-10 mt-2 w-40 bg-white border border-gray-300 shadow-md rounded-md z-20">
              {promptOptions.map((opt) => (
                <div
                  key={opt}
                  className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 text-black"
                  onClick={() => {
                    setSelectedPrompt(opt);
                    onPromptChange(opt);
                    setOpenDropdown(false);
                  }}
                >
                  {opt}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Send */}
        <IconButton onClick={send}>
          <PaperAirplaneIcon className="w-5 h-5" />
        </IconButton>
      </div>
    </div>
  );
}
