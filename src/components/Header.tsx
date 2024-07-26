import { Button } from "@/components/ui";
import { colors } from "@/constant";
import Image from "next/image";

export function Header() {
  return (
    <div className={`flex flex-row w-full`}>
      <div className="basis-1/4 m-4">
        <Image
          src="/assets/nexpando_logo.png"
          alt="nexpando_logo"
          width={400}
          height={400}
        />
      </div>
      <div className="basis-2/4">
        <div>
          <p>Phiên bản: 0.1.5 (2) - Khu: Khu-nha-tron</p>
          <p>Thiết bị: aaaaaaaaaaaaaaaaaaaaaaaa</p>
        </div>
        <div></div>
      </div>
      <div className="basis-1/4 flex justify-end items-center gap-4 mr-4">
        <Button
          className="bg-[#9DDE8B] text-black text-2xl  font-bold"
          size={"lg"}>
          Cài Đặt
        </Button>
        <Button className="bg-[#EE4E4E] text-2xl font-bold" size={"lg"}>
          Thoát
        </Button>
      </div>
    </div>
  );
}
