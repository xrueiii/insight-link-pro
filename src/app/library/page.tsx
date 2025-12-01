import { ArticleGrid } from "./components/ArticleGrid";
import { articles } from "./config/articles";

export default function Library() {
  return (
    <div className="flex flex-col w-full h-full bg-white">
      <div className="flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-semibold text-slate-900">Library</h1>

        <div className="flex items-center gap-3 text-black">
          <input
            placeholder="Value"
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm text-black"
          />
          <input
            placeholder="Value"
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm text-black"
          />
        </div>
      </div>

      <div className="px-6 pb-10">
        <ArticleGrid items={articles} />
      </div>
    </div>
  );
}
