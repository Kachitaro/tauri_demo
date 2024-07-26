"use client";
import { Button } from "@/components/ui";
import { useState } from "react";
import * as PrintPlugin from "tauri-plugin-printer";
import {
  PrintData,
  PrintFileOptions,
} from "tauri-plugin-printer/dist/lib/types";

export function Print() {
  const [printers, setPrinters] = useState<Array<any>>();
  const data: PrintData[] = [
    {
      type: "text",
      value: "Nguyễn Anh Tài",
      style: { fontSize: "5px" },
      position: "center",
    },
    {
      type: "table",
      style: { fontSize: "6px" },
      tableHeader: ["Animal", "Age"],
      tableBody: [
        ["Tài Nguyễn", "2"],
        ["Đạt Phạm", "4"],
        ["Cơm chiên dương châu", "50vnd"],
      ],
    },
  ];
  const option: any = {
    id: printers?.[0]?.id ?? "",
    // page_size: {
    //   width: 400,
    //   height: 300,
    // },
    // print_setting: {
    //   orientation: "landscape",
    //   method: "simplex",
    //   paper: "A6",
    //   scale: "noscale",
    //   // repeat: 1,
    //   // range: {
    //   //   from: 1,
    //   //   to: 1,
    //   // },
    // },
    // remove_temp: true,
  };
  const optFile: PrintFileOptions = {
    id: printers?.[0]?.id ?? "",
    name: "Bill",
    path: "C:/download.pdf",
    print_setting: {
      orientation: "portrait",
      method: "simplex",
      paper: "A6",
      scale: "shrink",
      repeat: 1,
      range: {
        from: 1,
        to: 3,
      },
    },
    remove_temp: true,
  };
  const handlePrint = async () => {
    try {
      const list = await PrintPlugin.printers();
      setPrinters(list || []);
      console.log("printer list...", list);
    } catch (error) {
      console.log("get printers error...", error);
    }
  };
  const handlePrintTest = async () => {
    try {
      await PrintPlugin.print(data, option);
      // await PrintPlugin.print_file(optFile);
      console.log("Da in");
    } catch (error) {
      console.log("get printers error...", error);
    }
  };

  const handle = () => {
    handlePrint();
    handlePrintTest();
  };

  return (
    <div>
      <Button onClick={handle}>Print Hello</Button>
      {printers && printers.map((p) => <h2 key={p}>{p.name}</h2>)}
    </div>
  );
}
