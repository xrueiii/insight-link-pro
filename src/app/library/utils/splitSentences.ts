export function splitSentences(text: string): string[] {
  if (!text) return [];

  // 匹配英文句子，保留 . ? !
  const sentences = text.match(/[^.!?]+[.!?]/g);

  if (!sentences) return [text.trim()];

  return sentences.map((s) => s.trim());
}
