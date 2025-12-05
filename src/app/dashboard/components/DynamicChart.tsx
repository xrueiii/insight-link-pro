"use client";

import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type Props = {
  category: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
};

export default function DynamicChart({ category, data }: Props) {
  if (!data || data.length === 0) {
    return (
      <div className="border rounded-xl p-10 bg-white text-gray-500">
        No data available.
      </div>
    );
  }

  return (
    <div className="border rounded-xl bg-white p-6 h-[400px]">
      <ResponsiveContainer>
        {category === "Media Sources" ? (
          <BarChart data={data}>
            <XAxis dataKey="newspaper" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="before" fill="#6B7280" name="Before Atlanta" />
            <Bar dataKey="after" fill="#9CA3AF" name="After Atlanta" />
          </BarChart>
        ) : (
          <BarChart data={data.slice(0, 20)}>
            <XAxis
              dataKey="word"
              interval={0}
              angle={-40}
              textAnchor="end"
              height={120}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="deepseek_before"
              fill="#A5B4FC"
              name="DeepSeek Before"
            />
            <Bar
              dataKey="deepseek_after"
              fill="#C7D2FE"
              name="DeepSeek After"
            />
            <Bar
              dataKey="chatgpt_before"
              fill="#888888"
              name="ChatGPT Before"
            />
            <Bar dataKey="chatgpt_after" fill="#000000" name="ChatGPT After" />
          </BarChart>
        )}
      </ResponsiveContainer>
    </div>
  );
}
