import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useScrollDirection from "../../hooks/common/useScroll";
import NaviBar from "./NaviBar";
import NaviContent from "./NaviContent";

export type tutorialType = {
  title: string;
  level: string;
  techStackIcon: TechIconImg[];
};

const Header = () => {
  const [dropDown, setDropDown] = useState(false);
  const { level } = useParams();
  const scrollDirection = useScrollDirection();

  useEffect(() => {
    setDropDown(false);
  }, [level]);

  return (
    <div
      className={`${
        scrollDirection === "down" ? "-top-16" : "top-0"
      } sticky h-16 flex justify-center items-center flex-col w-full transition-all duration-500`}
    >
      <NaviBar dropDown={dropDown} setDropDown={setDropDown} />
      <NaviContent dropDown={dropDown} />
    </div>
  );
};

export default Header;
