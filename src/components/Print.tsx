"use client";
import { Button } from "@/components/ui";
import { useState } from "react";
import * as PrintPlugin from "tauri-plugin-printer";

export function Print() {
  const [printers, setPrinters] = useState<Array<any>>();
  const data = [
    {
      type: "text", // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
      value: "SAMPLE HEADING",
      style: { fontWeight: "700", textAlign: "center", fontSize: "24px" },
    },
    {
      type: "text", // 'text' | 'barCode' | 'qrCode' | 'image' | 'table'
      value: "Secondary text",
      style: {
        textDecoration: "underline",
        fontSize: "10px",
        textAlign: "center",
        color: "red",
      },
    },
    {
      type: "barCode",
      value: "023456789010",
      height: 40, // height of barcode, applicable only to bar and QR codes
      width: 2, // width of barcode, applicable only to bar and QR codes
      displayValue: true, // Display value below barcode
      fontsize: 12,
    },
    {
      type: "table",
      // style the table
      style: { border: "1px solid #ddd" },
      // list of the columns to be rendered in the table header
      tableHeader: ["Animal", "Age"],
      // multi dimensional array depicting the rows and columns of the table body
      tableBody: [
        ["Tài Nguyễn", 2],
        ["Đạt Phạm", 4],
        ["Canh Riêu Cua", 12],
        ["Heo Mọi", 4],
      ],
      // list of columns to be rendered in the table footer
      tableFooter: ["Animal", "Age"],
      // custom style for the table header
      tableHeaderStyle: { backgroundColor: "#000", color: "white" },
      // custom style for the table body
      tableBodyStyle: { border: "0.5px solid #ddd" },
      // custom style for the table footer
      tableFooterStyle: { backgroundColor: "#000", color: "white" },
    },
  ];
  const option: any = {
    id: printers?.[0]?.id ?? "",
    page_size: {
      width: 300,
      height: 300,
    },
    print_setting: {
      orientation: "landscape",
      method: "simplex",
      paper: "A6",
      scale: "noscale",
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
      //@ts-ignore
      await PrintPlugin.print(data, option);
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
