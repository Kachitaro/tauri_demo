
import { WrapComponent } from "@/components/TestP";
export default function Home() {
  return (
    <main className="flex h-[90vh] flex-col items-center justify-between p-24">
      <h1>Next.js và Tauri</h1>
      <WrapComponent />
    </main>
  );
}
