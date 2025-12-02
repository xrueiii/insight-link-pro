import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { ArticleGrid } from "./components/ArticleGrid";
import { Pagination } from "./components/Pagination";
import { articles } from "./config/articles";

export default async function LibraryPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page: pageParam } = await searchParams;

  const page = Number(pageParam) || 1;

  const pageSize = 9;
  const totalItems = 584; // 假裝資料總數
  const totalPages = Math.ceil(totalItems / pageSize);

  // 實際渲染的本地資料
  const paginatedItems = articles.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="flex flex-col w-full h-full bg-white">
      <div className="flex items-center justify-between px-6 py-6">
        <h1 className="text-2xl font-semibold text-slate-900 px-6">Library</h1>

        <div className="relative text-black">
          <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />

          <input
            placeholder="Search"
            className="rounded-lg border border-slate-300 pl-10 pr-3 py-2 text-sm text-black w-64"
          />
        </div>
      </div>

      <div className="px-6 pb-10">
        <ArticleGrid items={paginatedItems} />

        <Pagination currentPage={page} totalPages={totalPages} />
      </div>
    </div>
  );
}
