interface TitleProps {
  left: Element;
  sxLeft?: string;
  sxRight?: string;
  sxCenter?: string;
}

export function Title() {
  return (
    <div className="w-full h-full flex justify-between">
      <div className="">
        <h1>Nhân viên</h1>
      </div>
      <div className="">a</div>
      <div className="">
        <h1>Giờ: 14:24: 60</h1>
      </div>
    </div>
  );
}
