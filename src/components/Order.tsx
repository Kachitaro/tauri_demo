import { FoodCard } from "@/components";
import { foodData } from "@/lib/ticketlayout";

export function Order() {
  return (
    <div className="">
      <div className="grid grid-cols-4 gap-2">
        {foodData.map((item: any, idx: number) => {
          const { name, defaultPrice, position } = item;
          return (
            <FoodCard
              key={idx}
              name={name}
              price={defaultPrice}
              position={position}
            />
          );
        })}
      </div>
    </div>
  );
}
