import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import tutorial from "../../data/tutorialList.json";
import { tutorialType } from "./Header";

type NaviBarProps = {
  dropDown: boolean;
  setDropDown: React.Dispatch<React.SetStateAction<boolean>>;
};

const NaviBar = ({ dropDown, setDropDown }: NaviBarProps) => {
  const navigate = useNavigate();
  const { level } = useParams();

  const LEVEL = Number(level);
  const TITLE = tutorial[LEVEL - 1]["title"];

  const onPagination = (a: number) => {
    navigate(`/${LEVEL + a}`);
  };

  const onDropDownMenu = () => {
    setDropDown((prev) => !prev);
  };

  return (
    <div className="flex justify-between items-center mx-auto bg-stone-800 p-4 text-white z-10 w-full">
      <button
        onClick={() => onPagination(-1)}
        disabled={LEVEL > 1 ? false : true}
      >
        <img
          className="w-5 h-5"
          src={
            LEVEL > 1
              ? "../icons/arrow-left.png"
              : "../icons/arrow-left-disabled.png"
          }
          alt={LEVEL > 1 ? "arrow-left" : "arrow-left-disabled"}
        />
      </button>
      <button
        onClick={onDropDownMenu}
        className="bg-transparent flex justify-center items-center"
      >
        <h2 className="mx-6 text-2xl">{TITLE}</h2>
        <img
          className="w-3 h-3 object-contain"
          src={
            dropDown
              ? "../icons/chevron-top.png"
              : "../icons/chevron-bottom.png"
          }
          alt={dropDown ? "chevron-top" : "chevron-bottom"}
        />
      </button>
      <button
        onClick={() => onPagination(1)}
        disabled={LEVEL < 13 ? false : true}
      >
        <img
          className="w-5 h-5"
          src={
            LEVEL < 13
              ? "../icons/arrow-right.png"
              : "../icons/arrow-right-disabled.png"
          }
          alt={LEVEL < 13 ? "arrow-right" : "arrow-right-disabled"}
        />
      </button>
    </div>
  );
};

export default NaviBar;
