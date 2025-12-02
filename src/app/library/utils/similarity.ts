export function similarity(a: string, b: string): number {
  const A = a.toLowerCase().split(/\W+/);
  const B = b.toLowerCase().split(/\W+/);

  const setA = new Set(A);
  const setB = new Set(B);

  let intersection = 0;

  setA.forEach((word) => {
    if (setB.has(word)) intersection++;
  });

  const score = intersection / Math.max(setA.size, setB.size);
  return score; // 0.0 - 1.0
}
