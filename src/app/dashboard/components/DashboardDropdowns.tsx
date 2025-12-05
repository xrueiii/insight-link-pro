"use client";

type Props = {
  topic: string;
  category: string;
  topicOptions: string[];
  categoryOptions: string[];
  onTopicChange: (v: string) => void;
  onCategoryChange: (v: string) => void;
};

export default function DashboardDropdowns({
  topic,
  category,
  topicOptions,
  categoryOptions,
  onTopicChange,
  onCategoryChange,
}: Props) {
  return (
    <div className="flex gap-6">
      <select
        value={topic}
        onChange={(e) => onTopicChange(e.target.value)}
        className="border rounded-lg px-4 py-2 w-1/2 bg-white text-black"
      >
        {topicOptions.map((t) => (
          <option key={t}>{t}</option>
        ))}
      </select>

      <select
        value={category}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="border rounded-lg px-4 py-2 w-1/2 bg-white text-black"
      >
        {categoryOptions.map((c) => (
          <option key={c}>{c}</option>
        ))}
      </select>
    </div>
  );
}
