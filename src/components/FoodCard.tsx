import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components";
import { formatCurrency, getColorFromString } from "@/lib";

interface FoodCardProps {
  name: string;
  price: number;
  position: number;
  onClick?: () => void;
}

export function FoodCard(props: FoodCardProps) {
  const { name, price, position, onClick } = props;
  const background = getColorFromString(name);

  return (
    <Button
      className={`h-auto p-0 rounded-[8px] bg-[${background}] `}
      onClick={onClick}>
      <div
        className={`flex flex-col w-full text-xl rounded-[8px] bg-[${background}] `}>
        <h3 className="p-3 flex items-start text-black text-xl">{position}</h3>
        <CardContent className="p-0 text-black text-xl">{name}</CardContent>
        <CardFooter className="p-3 text-black text-xl justify-end ">
          {formatCurrency(price)}
        </CardFooter>
      </div>
    </Button>
  );
}
