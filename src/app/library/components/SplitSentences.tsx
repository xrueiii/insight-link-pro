"use client";

export function SplitSentences({
  text,
  onHoverSentence,
}: {
  text: string;
  onHoverSentence?: (sentence: string | null) => void;
}) {
  const sentences = text
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter(Boolean);

  return (
    <div className="leading-7 text-slate-700">
      {sentences.map((sentence, index) => (
        <span
          key={index}
          className="hover:bg-yellow-200 cursor-pointer transition"
          onMouseEnter={() => onHoverSentence?.(sentence)}
          onMouseLeave={() => onHoverSentence?.(null)}
        >
          {sentence + " "}
        </span>
      ))}
    </div>
  );
}
