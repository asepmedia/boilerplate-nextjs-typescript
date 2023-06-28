import React from "react";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";

interface ICardCollapsibleHeader {
  className?: string;
  isCollapse: boolean;
  title?: string | React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function CardCollapsibleHeader(props: ICardCollapsibleHeader) {
  const { className, title, isCollapse, onClick } = props;
  return (
    <button
      type={"button"}
      className={`flex w-full justify-between items-center p-4 bg-primary active:bg-primary/90 hover:bg-primary/95 rounded-t-lg text-white transition duration-300 ${className}`}
      onClick={onClick}
    >
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className="text-xl font-semibold">
        {isCollapse ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />}
      </div>
    </button>
  );
}

export default React.memo(CardCollapsibleHeader);
