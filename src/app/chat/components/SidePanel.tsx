import { SideParagraph } from "./SideParagraph";
import { Tag } from "./Tag";

export function SidePanel() {
  return (
    <section className="flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      {/* 其他側邊欄內容 */}
      {[1, 2].map((section) => (
        <div key={section} className="space-y-6">
          <div className="flex flex-wrap gap-2">
            <Tag />
            <Tag />
          </div>

          <SideParagraph />
          <SideParagraph />
        </div>
      ))}
    </section>
  );
}
