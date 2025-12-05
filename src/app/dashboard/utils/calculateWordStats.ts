import type { WordStat } from "../configs/wordStats";

export type WordDashboardStats = {
  date: string;
  totalArticles: number;
  commonSignificantWord: string;
  differencePercent: number;
};

export function calculateWordStats(data: WordStat[]): WordDashboardStats {
  const startDate = "2020/3";
  const endDate = "2021/12";

  const date = `${startDate} - ${endDate}`;

  // 文章數 = 所有詞彙的 before+after 合計（可調整）
  const totalArticles = 583;

  // 找出變化最大的詞彙（使用 chatgpt_before vs chatgpt_after）
  let maxWord = "";
  let maxDiff = -Infinity;
  let maxBefore = 0;
  let maxAfter = 0;

  for (const w of data) {
    const diff = Math.abs(w.chatgpt_after - w.chatgpt_before);
    if (diff > maxDiff) {
      maxDiff = diff;
      maxWord = w.word;
      maxBefore = w.chatgpt_before;
      maxAfter = w.chatgpt_after;
    }
  }

  // 差異百分比計算
  let differencePercent = 0;
  if (maxBefore === 0) {
    differencePercent = maxAfter * 100;
  } else {
    differencePercent = Number(
      (((maxAfter - maxBefore) / maxBefore) * 100).toFixed(2)
    );
  }

  return {
    date,
    totalArticles,
    commonSignificantWord: maxWord,
    differencePercent,
  };
}
