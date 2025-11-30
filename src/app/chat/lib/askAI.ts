export async function askAI(prompt: string): Promise<string> {
  const res = await fetch("/api/chat", {
    method: "POST",
    body: JSON.stringify({ message: prompt }),
  });

  const data = await res.json();

  if (data.error) {
    throw new Error("AI Error");
  }

  return data.reply;
}
