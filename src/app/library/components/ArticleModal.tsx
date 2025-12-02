interface ModalProps {
  open: boolean;
  onClose: () => void;
  article: {
    title: string;
    author: string;
    publisher: string;
    date: string;
    text: string;
    summary?: string;
  };
}

export function ArticleModal({ open, onClose, article }: ModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-xl w-[90vw] max-w-5xl h-[85vh] flex">
        {/* LEFT — SCROLLABLE ARTICLE CONTENT */}
        <div className="w-2/3 p-8 overflow-y-auto border-r border-slate-200">
          <h2 className="text-2xl font-bold pt-2 text-black">
            {article.title}
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            {article.author} ({article.publisher}) · {article.date}
          </p>

          <div className="mt-1 space-y-4 text-slate-700 leading-7 whitespace-pre-line">
            {article.text}
          </div>
        </div>

        {/* RIGHT — SUMMARY + ANALYSIS (NOT scrollable) */}
        <div className="w-1/3 p-8 flex flex-col">
          {/* Close button */}
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
              {/* {article.tags.map((tag, idx) => (
                <span
                key={idx}
                className="px-3 py-1 rounded-full bg-slate-200 text-xs text-slate-700"
                >
                {tag}
                </span>
            ))} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
