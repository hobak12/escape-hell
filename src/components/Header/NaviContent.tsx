import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import tutorial from "../../data/tutorialList.json";
import { tutorialType } from "./Header";

type NaviContentProps = {
  dropDown: boolean;
};

const NaviContent = ({ dropDown }: NaviContentProps) => {
  const navigate = useNavigate();
  const { level } = useParams();

  return (
    <ul
      className={`${
        dropDown ? "translate-y-80" : "-translate-y-full"
      } duration-500 ease-in-out transition bg-stone-800 p-5 rounded-md absolute z-10`}
    >
      <li className="text-white p-1.5 text-lg">
        <Link to="/" className="w-full text-left block">
          로드맵으로 돌아가기
        </Link>
      </li>
      {tutorial.map((item: tutorialType) => (
        <li key={item.level} className="text-white p-1.5 text-lg">
          <button
            onClick={() => {
              navigate(`/${item.level}`);
            }}
            className={`${
              item.level === level ? "text-red-600" : "text-white"
            } w-full text-left`}
          >
            {item.title}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default NaviContent;
