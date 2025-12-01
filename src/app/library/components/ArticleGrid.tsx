import type { Article } from "../config/articles";
import { ArticleCard } from "./ArticleCard";

export function ArticleGrid({ items }: { items: Article[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
      {items.map((a) => (
        <ArticleCard key={a.id} {...a} />
      ))}
    </div>
  );
}
