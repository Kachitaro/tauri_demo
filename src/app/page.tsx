import { ReViewArea, CategoryArea, InputArea, MainArea } from "@/components";

export default function Home() {
  return (
    <main className="h-lvh">
      <div className="grid grid-cols-12 grid-rows-3 h-lvh">
        <div className="col-span-8 row-span-2 overflow-y-scroll no-scrollbar">
          <MainArea />
        </div>
        <div className="col-span-4 row-span-2 overflow-y-scroll">
          <ReViewArea />
        </div>
        <div className="row-span-1 col-span-8">
          <CategoryArea />
        </div>
        <div className="col-span-4 row-span-2">
          <InputArea />
        </div>
      </div>
    </main>
  );
}
