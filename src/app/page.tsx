import StartButton from "./components/StartButton";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-6">
      <h1 className="text-4xl font-semibold text-black">
        Welcome to InsightLink+
      </h1>
      <p className="mt-4 text-slate-600">Click Start to begin chatting.</p>

      <div className="mt-8">
        <StartButton />
      </div>
    </div>
  );
}
