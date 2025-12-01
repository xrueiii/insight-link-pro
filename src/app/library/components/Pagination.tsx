import clsx from "clsx";
import Link from "next/link";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
};

export function Pagination({ currentPage, totalPages }: PaginationProps) {
  if (totalPages <= 1) return null;

  const generatePages = () => {
    const pages: (number | "...")[] = [];

    pages.push(1);

    if (currentPage > 4) pages.push("...");

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) pages.push(i);

    if (currentPage < totalPages - 3) pages.push("...");

    pages.push(totalPages);

    return pages;
  };

  const pages = generatePages();

  return (
    <div className="flex items-center justify-center gap-2 mt-6">
      {/* Prev */}
      <Link
        href={`/library?page=${currentPage - 1}`}
        className={clsx(
          "px-3 py-1 rounded-lg border text-sm",
          currentPage === 1
            ? "pointer-events-none opacity-40 border-slate-300"
            : "border-slate-300 text-slate-700 hover:bg-slate-100"
        )}
      >
        Prev
      </Link>

      {/* Page numbers */}
      <div className="flex gap-1">
        {pages.map((p, i) =>
          p === "..." ? (
            <span key={`dots-${i}`} className="px-3 py-1 text-slate-400">
              …
            </span>
          ) : (
            <Link
              key={`page-${p}`}
              href={`/library?page=${p}`}
              className={clsx(
                "px-3 py-1 rounded-lg border text-sm",
                p === currentPage
                  ? "bg-slate-900 text-white border-slate-900"
                  : "border-slate-300 text-slate-700 hover:bg-slate-100"
              )}
            >
              {p}
            </Link>
          )
        )}
      </div>

      {/* Next */}
      <Link
        href={`/library?page=${currentPage + 1}`}
        className={clsx(
          "px-3 py-1 rounded-lg border text-sm",
          currentPage === totalPages
            ? "pointer-events-none opacity-40 border-slate-300"
            : "border-slate-300 text-slate-700 hover:bg-slate-100"
        )}
      >
        Next
      </Link>
    </div>
  );
}
