type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
};

export default function DataTable({ data }: Props) {
  if (!data || data.length === 0) return null;

  // 排除不要顯示的欄位
  const exclude = ["deepseek_p_value", "chatgpt_p_value"];

  const columns = Object.keys(data[0]).filter((c) => !exclude.includes(c));

  return (
    <div className="border rounded-xl bg-white p-4 mt-6">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            {columns.map((c) => (
              <th key={c} className="border-b p-2 text-gray-600">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="border-b text-black">
              {columns.map((c) => (
                <td key={c} className="p-2">
                  {row[c]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
