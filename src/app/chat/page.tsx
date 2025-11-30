import { ChatSection } from "./components/ChatSection";
import { SidePanel } from "./components/SidePanel";

export default function ChatPage() {
  return (
    <div className="grid min-h-screen grid-cols-1 gap-6 px-10 py-10 lg:grid-cols-[1.1fr_0.9fr] bg-white">
      <ChatSection />
      <SidePanel />
    </div>
  );
}
