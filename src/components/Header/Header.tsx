import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import tutorial from "../../data/tutorialList.json";
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

  useEffect(() => {
    setDropDown(false);
  }, [level]);

  return (
    <div className="flex justify-center items-center flex-col mx-auto w-full">
      <NaviBar dropDown={dropDown} setDropDown={setDropDown} />
      <NaviContent dropDown={dropDown} />
    </div>
  );
};

export default Header;
