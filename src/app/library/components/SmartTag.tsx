import { useEffect, useRef, useState } from "react";

interface Props {
  children: string;
  maxWidth?: number; // default = 120px
}

export function SmartTag({ children, maxWidth = 300 }: Props) {
  const spanRef = useRef<HTMLSpanElement>(null);
  const [small, setSmall] = useState(false);

  useEffect(() => {
    const el = spanRef.current;
    if (!el) return;

    // 若文字寬度 > maxWidth → 使用小字體
    if (el.scrollWidth > maxWidth) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSmall(true);
    } else {
      setSmall(false);
    }
  }, [children, maxWidth]);

  return (
    <span
      ref={spanRef}
      style={{ maxWidth }}
      className={`
        px-3 py-1.5 rounded-full bg-black text-white 
        text-center inline-flex items-center justify-center
        overflow-hidden whitespace-nowrap
        ${small ? "text-xs" : "text-sm"}
      `}
    >
      {children}
    </span>
  );
}
