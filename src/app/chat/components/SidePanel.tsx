"use client";

import { ClipboardIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { annotations } from "../config/annotations";
import { prompts } from "../config/prompt";

type SidePanelProps = {
  mode: "prompt" | "analysis"; // ⭐ 選 prompt → prompt 模式；按送出 → analysis 模式
  promptKey: keyof typeof prompts;
  articleId?: string; // analysis 用
};

export function SidePanel({ mode, promptKey }: SidePanelProps) {
  const [copied, setCopied] = useState(false);

  // Prompt mode data
  const prompt = prompts[promptKey];

  // Analysis mode data
  const items = annotations;

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(JSON.stringify(prompt, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section className="relative p-4 rounded-2xl border border-slate-200 bg-white shadow-sm h-full overflow-hidden flex flex-col">
      {/* -------- PROMPT MODE -------- */}
      {mode === "prompt" && (
        <>
          {/* Copy Icon */}
          <button
            onClick={copyToClipboard}
            className="cursor-pointer absolute top-2 right-3 p-1 rounded-md transition m-2"
            title="Copy prompt"
          >
            <ClipboardIcon className="w-5 h-5 text-black" />
          </button>

          {copied && (
            <div className="absolute top-3 right-14 bg-green-500 text-white text-xs px-2 py-1 rounded shadow">
              Copied!
            </div>
          )}

          <h2 className="text-lg font-semibold mb-2 text-black">Prompt</h2>

          <pre className="bg-slate-900 text-slate-100 text-sm p-4 rounded-lg flex-1 overflow-auto whitespace-pre-wrap wrap-break-word">
            {JSON.stringify(prompt, null, 2)}
          </pre>
        </>
      )}

      {/* -------- ANALYSIS MODE -------- */}
      {mode === "analysis" && (
        <>
          <h2 className="text-lg font-semibold text-black py-4 px-1">
            Detected concepts
          </h2>

          <div className="flex-1 overflow-auto space-y-4 pr-1">
            {items.map((ann) => (
              <div key={ann.quote} className="space-y-2">
                <div className="flex flex-wrap gap-2">
                  {ann.concepts.map((c) => (
                    <span
                      key={c}
                      className="inline-flex items-center rounded-full bg-black text-white text-xs font-semibold px-3 py-1.5"
                    >
                      {c}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-black leading-relaxed">
                  {ann.quote}
                </p>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
