import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { message } = await req.json();

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Missing API key" }, { status: 500 });
  }

  const res = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      input: message,
    }),
  });

  const data = await res.json();

  if (!res.ok) {
    console.error("OPENAI ERROR:", data);
    return NextResponse.json({ error: data }, { status: 500 });
  }

  const text = data.output_text ?? data.output?.[0]?.content?.[0]?.text ?? "";

  return NextResponse.json({ reply: text });
}
