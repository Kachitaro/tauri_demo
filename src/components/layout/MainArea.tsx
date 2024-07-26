import { Header, Order } from "@/components";
export function MainArea() {
  return (
    <div className="relative ">
      <div className={`sticky top-0 left-0 bg-[#f1f1f1]`}>
        <Header />
      </div>
      <Order />
    </div>
  );
}
