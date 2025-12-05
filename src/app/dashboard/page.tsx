"use client";

import { useMemo, useState } from "react";

import DashboardDropdowns from "./components/DashboardDropdowns";
import DataTable from "./components/Datatable";
import DynamicChart from "./components/DynamicChart";
import StatsCards from "./components/StatsCards";

import { newspaperStats } from "./configs/newspaperStats";
import { wordStats } from "./configs/wordStats";

import { calculateDashboardStats } from "./utils/calcStats";
import { calculateWordStats } from "./utils/calculateWordStats";

export default function Dashboard() {
  const topicOptions = [
    "News Article Dataset",
    "Q1: Compare the differences in racism or discrimination types before and after the Atlanta spa shooting.",
    "Q2: Compare the reactions and emotional responses of different social groups before and after the Atlanta spa shooting.",
    "Q3: Examine the differences in the number of cited sources between mainstream and non-mainstream media outlets.",
    "Q4: Examine the differences in reporting content and narrative motivations between mainstream and non-mainstream media.",
  ];

  const categoryOptions = [
    "Media Sources",
    "Most Frequent Words in the Articles",
  ];

  const [topic, setTopic] = useState(topicOptions[0]);
  const [category, setCategory] = useState(categoryOptions[0]);

  // 1. 根據選項決定資料來源
  const selectedData = useMemo(() => {
    if (topic === "News Article Dataset") {
      if (category === "Media Sources") return newspaperStats;
      if (category === "Most Frequent Words in the Articles") return wordStats;
    }
    return [];
  }, [topic, category]);

  // 2. 根據資料類型計算統計值（StatsCards）
  const stats = useMemo(() => {
    if (category === "Media Sources") {
      return calculateDashboardStats(newspaperStats);
    }
    if (category === "Most Frequent Words in the Articles") {
      return calculateWordStats(wordStats);
    }
    return null;
  }, [category]);

  return (
    <div className="p-10 space-y-8 bg-white min-h-screen">
      <h1 className="text-2xl font-semibold text-black">Dashboard</h1>

      {/* Dropdown 選單 */}
      <DashboardDropdowns
        topic={topic}
        category={category}
        topicOptions={topicOptions}
        categoryOptions={categoryOptions}
        onTopicChange={setTopic}
        onCategoryChange={setCategory}
      />

      {/* StatsCards：若有 stats 就顯示 */}
      {stats && <StatsCards stats={stats} />}

      {/* 圖表 */}
      <DynamicChart category={category} data={selectedData} />

      {/* 表格 */}
      <DataTable data={selectedData} />
    </div>
  );
}
