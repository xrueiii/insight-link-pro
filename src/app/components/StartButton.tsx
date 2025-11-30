"use client";

import { useRouter } from "next/navigation";

export default function StartButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/chat");
  };

  return (
    <button
      onClick={handleClick}
      className="cursor-pointer rounded-lg bg-slate-900 px-6 py-3 text-white shadow hover:bg-slate-700"
    >
      Start
    </button>
  );
}
