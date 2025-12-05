// utils/calcStats.ts
import type { NewspaperStat } from "../configs/newspaperStats";

export type DashboardStats = {
  date: string;
  totalArticles: number;
  mainstreamPercent: number; // 主流媒體佔比 (%)
  nonMainstreamPercent: number; // 非主流佔比 (%)
};

export function calculateDashboardStats(data: NewspaperStat[]): DashboardStats {
  // 全部報導總量
  const totalArticles = data.reduce((sum, x) => sum + x.total, 0) - 1;

  // 主流媒體總量
  const mainstreamTotal = data
    .filter((x) => x.category === "mainstream")
    .reduce((sum, x) => sum + x.total, 0);

  // 非主流媒體總量
  const nonMainstreamTotal = data
    .filter((x) => x.category === "non-mainstream")
    .reduce((sum, x) => sum + x.total, 0);

  // 取比例（四捨五入至 2 位）
  const mainstreamPercent = Number(
    ((mainstreamTotal / totalArticles) * 100).toFixed(2)
  );
  const nonMainstreamPercent = Number(
    ((nonMainstreamTotal / totalArticles) * 100).toFixed(2)
  );

  const startDate = "2020/3";
  const endDate = "2021/12";
  const date = `${startDate} - ${endDate}`;

  return {
    date,
    totalArticles,
    mainstreamPercent,
    nonMainstreamPercent,
  };
}
