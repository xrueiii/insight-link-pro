import type { Article } from "../config/articles";

export function ArticleCard({ title, author, publisher, date, text }: Article) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition cursor-pointer">
      <h3 className="text-lg font-semibold text-slate-900 leading-snug line-clamp-2">
        {title}
      </h3>

      <p className="text-xs text-slate-500 mt-1">
        {author} — {publisher} · {date}
      </p>

      <p className="mt-3 text-sm text-slate-600 leading-6 line-clamp-4">
        {text}
      </p>
    </div>
  );
}
