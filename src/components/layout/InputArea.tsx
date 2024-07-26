import { Title } from "@/components/Title";
import { Button } from "@/components/ui";

export function InputArea() {
  return (
    <div className="grid grid-cols-1 h-full">
      <div className="col-span-2">
        <Title />
      </div>
      <div className="col-span-2 flex">
        <div className="flex flex-col justify-between h-full">
          <Button className="bg-[#FFE8C8] text-black text-xl" size={"lg"}>
            Chức năng
          </Button>
          <Button className="bg-[#FFE8C8] text-black text-xl" size={"lg"}>
            Khách Hàng
          </Button>
          <Button className="bg-[#FFE8C8] text-black text-xl" size={"lg"}>
            Sửa
          </Button>
          <Button className="bg-[#FFE8C8] text-black text-xl" size={"lg"}>
            Đóng bàn
          </Button>
          <Button className="bg-[#FFE8C8] text-black text-xl" size={"lg"}>
            Dùng điểm thưởng
          </Button>
        </div>
        <div className="w-full bg-green-500"></div>
      </div>
    </div>
  );
}
