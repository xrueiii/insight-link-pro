import { ClipboardIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { prompts } from "../config/prompt";

type SidePanelProps = {
  promptKey: keyof typeof prompts;
};

export function SidePanel({ promptKey }: SidePanelProps) {
  const prompt = prompts[promptKey];
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(JSON.stringify(prompt, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section className="relative p-4 rounded-2xl border border-slate-200 bg-white shadow-sm h-full overflow-hidden">
      {/* Copy Icon */}
      <button
        onClick={copyToClipboard}
        className="cursor-pointer absolute top-3 right-3 p-1 rounded-md transition m-2"
        title="Copy prompt"
      >
        <ClipboardIcon className="w-5 h-5 text-white" />
      </button>

      {/* Copied Message */}
      {copied && (
        <div className="absolute top-3 right-12 bg-green-500 text-white text-xs px-2 py-1 rounded shadow">
          Copied!
        </div>
      )}

      <pre
        className="
          bg-slate-900 text-slate-100 text-sm p-4 rounded-lg 
          h-full overflow-auto 
          whitespace-pre-wrap wrap-break-word
        "
      >
        {JSON.stringify(prompt, null, 2)}
      </pre>
    </section>
  );
}
