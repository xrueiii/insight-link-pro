import { useState } from "react";
import { annotations } from "../config/annotations";
import { similarity } from "../utils/similarity";
import { SmartTag } from "./SmartTag";
import { SplitSentences } from "./SplitSentences";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  article: {
    id: string;
    title: string;
    author: string;
    publisher: string;
    date: string;
    text: string;
    summary?: string;
  };
}

export function ArticleModal({ open, onClose, article }: ModalProps) {
  const [matchedTags, setMatchedTags] = useState<string[]>([]);

  if (!open) return null;

  // 🔥 取得該文章的所有 annotations
  const articleAnnotations = annotations.filter(
    (a) => a.article_id === article.id
  );

  // 🔥 Hover 到句子時比對 annotation.quote
  const handleHoverSentence = (sentence: string | null) => {
    if (!sentence) {
      setMatchedTags([]);
      return;
    }

    const matches: string[] = [];

    articleAnnotations.forEach((anno) => {
      const score = similarity(sentence, anno.quote);
      if (score >= 0.55) {
        matches.push(...anno.concepts); // concepts 是 string[]
      }
    });

    setMatchedTags(matches);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-xl w-[90vw] max-w-5xl h-[85vh] flex">
        {/* LEFT — SCROLLABLE TEXT */}
        <div className="w-2/3 p-8 overflow-y-auto border-r border-slate-200">
          <h2 className="text-2xl font-bold pt-2 text-black">
            {article.title}
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            {article.author} ({article.publisher}) · {article.date}
          </p>

          <div className="mt-1 text-slate-700 py-4">
            <SplitSentences
              text={article.text}
              onHoverSentence={handleHoverSentence}
            />
          </div>
        </div>

        {/* RIGHT SIDE — NOT SCROLLABLE */}
        <div className="w-1/3 p-8 flex flex-col">
          <button
            onClick={onClose}
            className="cursor-pointer self-end text-slate-400 hover:text-black text-xl mb-4"
          >
            ✕
          </button>

          <div className="flex-1 overflow-hidden">
            <h3 className="text-lg font-semibold mb-2 text-black">Summary</h3>
            <p className="text-sm text-slate-600 leading-6">
              {article.summary}
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2 text-black">
              Analysis
            </h3>

            <div className="flex flex-wrap gap-2">
              {matchedTags.length > 0 ? (
                matchedTags.map((tag, i) => <SmartTag key={i}>{tag}</SmartTag>)
              ) : (
                <p className="text-s text-slate-400">No concepts.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
