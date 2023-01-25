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

  const onPagination = (a: number) => {
    navigate(`/${Number(level) + a}`);
  };
  //   dropdown toggle
  const onDropDownMenu = () => {
    setDropDown((prev) => !prev);
  };

  return (
    <div className="flex justify-between items-center mx-auto bg-stone-800 p-4 text-white z-10 w-full">
      <button
        onClick={() => onPagination(-1)}
        disabled={Number(level) > 1 ? false : true}
      >
        <img
          className="w-5 h-5"
          src={
            Number(level) > 1
              ? "../icons/arrow-left.png"
              : "../icons/arrow-left-disabled.png"
          }
        />
      </button>
      <button
        onClick={onDropDownMenu}
        className="bg-transparent flex justify-center items-center"
      >
        {tutorial.map((item: tutorialType) => {
          if (item.level === level) {
            return (
              <h2 key={item.level} className="mx-6 text-2xl">
                {item.title}
              </h2>
            );
          }
        })}
        <img
          className="w-3 h-3 object-contain"
          src={
            dropDown
              ? "../icons/chevron-top.png"
              : "../icons/chevron-bottom.png"
          }
        />
      </button>
      <button
        onClick={() => onPagination(1)}
        disabled={Number(level) < 13 ? false : true}
      >
        <img
          className="w-5 h-5"
          src={
            Number(level) < 13
              ? "../icons/arrow-right.png"
              : "../icons/arrow-right-disabled.png"
          }
        />
      </button>
    </div>
  );
};

export default NaviBar;
