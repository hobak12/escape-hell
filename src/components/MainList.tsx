import MainListItem from "./MainListItem";
import { Link } from "react-router-dom";
// import CF from "icon/CF.png";

type MainListProps = {
  items: [];
};

const tutorialList = [{}];

{
  /* {tutorialList.map((item, idx) => <li id={idx.toString()}></li>)} */
}

const MainList = () => {
  return (
    <ul className="max-w-screen-xl my-0 mx-auto flex flex-col gap-10">
      <li>
        <Link to={"1"}>
          <div className="flex flex-grow bg-stone-800 p-8 mx-4 rounded-[2rem] h-64 items-center justify-between">
            <div className="flex gap-3 flex-col">
              <p className="text-white text-2xl">지옥문 1단계</p>
              <h3 className="text-white font-bold text-5xl">기초공사</h3>
            </div>
            <div className="flex flex-row gap-3">
              <img className="w-20 h-20" src="/icons/html5.png" alt="HTML" />
              <img className="w-20 h-20" src="/icons/css3.png" alt="CSS" />
              <img
                className="w-20 h-20"
                src="/icons/javascript.png"
                alt="JavaScript"
              />
            </div>
          </div>
        </Link>
      </li>
      <li>
        <Link to={"2"}>
          <div className="flex flex-grow bg-stone-800 p-8 mx-4 rounded-[2rem] h-64 items-center justify-between">
            <div className="flex gap-3 flex-col">
              <p className="text-white text-2xl">지옥문 2단계</p>
              <h3 className="text-white font-bold text-5xl">라이브러리</h3>
            </div>
            <div className="flex flex-row gap-3">
              <img
                className="w-20 h-20"
                src="/icons/angular.png"
                alt="garbage"
              />
              <img className="w-20 h-20" src="/icons/vue.png" alt="Vue" />
              <img className="w-20 h-20" src="/icons/react.png" alt="React" />
            </div>
          </div>
        </Link>
      </li>
    </ul>
  );
};

export default MainList;
