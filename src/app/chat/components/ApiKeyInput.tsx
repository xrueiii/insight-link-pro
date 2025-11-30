/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useState } from "react";

export function ApiKeyInput() {
  // SSR fallback
  if (typeof window === "undefined") return null;

  // 初始化：從 localStorage 拿 key
  const initial = localStorage.getItem("agent_api_key") ?? "";

  const [key, setKey] = useState(initial);
  const [saved, setSaved] = useState(initial !== "");

  const handleSave = () => {
    localStorage.setItem("agent_api_key", key);
    setSaved(true); // ← UI 會即時更新
  };

  const handleDelete = () => {
    localStorage.removeItem("agent_api_key");
    setKey("");
    setSaved(false);
  };

  return (
    <div className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-4">
      <label className="text-sm font-medium text-slate-700">
        AI Agent API Key
      </label>

      <input
        type="password"
        value={key}
        onChange={(e) => {
          setKey(e.target.value);
          setSaved(false); // ← 使用者一打字就視為沒有儲存
        }}
        placeholder="Enter your API key…"
        className="rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-slate-500 focus:outline-none"
      />

      <div className="flex items-center gap-3">
        <button
          onClick={handleSave}
          className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700"
        >
          {saved ? "Saved ✓" : "Save Key"}
        </button>

        {saved && (
          <button
            onClick={handleDelete}
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
          >
            Delete
          </button>
        )}
      </div>

      {saved && (
        <p className="text-xs text-green-600">API key is stored locally.</p>
      )}
    </div>
  );
}
