type StatsProps = {
  stats: {
    date: string;
    totalArticles: number;
    mainstreamPercent?: number;
    nonMainstreamPercent?: number;
    commonSignificantWord?: string;
    differencePercent?: number;
  };
};

export default function StatsCards({ stats }: StatsProps) {
  const items = [];

  items.push({ label: "Time Range", value: stats.date });
  items.push({ label: "Number of Articles", value: stats.totalArticles });

  if (stats.commonSignificantWord) {
    // Word Stats mode
    items.push({
      label: "Most Significant Word",
      value: stats.commonSignificantWord,
    });
    items.push({
      label: "Difference (%)",
      value: stats.differencePercent,
    });
  } else {
    // Newspaper Stats mode
    items.push({
      label: "Mainstream Media (%)",
      value: stats.mainstreamPercent,
    });
    items.push({
      label: "Non-mainstream Media (%)",
      value: stats.nonMainstreamPercent,
    });
  }

  return (
    <div className="grid grid-cols-4 gap-4 w-full">
      {items.map((s) => (
        <div
          key={s.label}
          className="border rounded-xl bg-white p-6 flex flex-col"
        >
          <span className="text-gray-600 text-sm">{s.label}</span>
          <span className="text-3xl font-semibold mt-2 text-black">
            {s.value}
          </span>
        </div>
      ))}
    </div>
  );
}
