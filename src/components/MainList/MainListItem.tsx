import { Link } from "react-router-dom";
import TechIcon from "./TechIcon";

type MainListItemProps = {
  idx: number;
  title: string;
  techStackIcons: TechIconImg[];
};

const MainListItem = ({ idx, title, techStackIcons }: MainListItemProps) => {
  const level = (idx + 1).toString();
  return (
    <li>
      <Link to={level}>
        <div className="flex flex-grow bg-stone-800 p-8 mx-4 rounded-[2rem] h-64 items-center justify-between">
          <div className="flex gap-3 flex-col">
            <p className="text-white text-2xl">지옥문 {level}단계</p>
            <h3 className="text-white font-bold text-5xl">{title}</h3>
          </div>
          <div className="flex flex-row gap-8">
            {techStackIcons.map(({ src, alt }, idx) => (
              <TechIcon key={idx} src={src} alt={alt} />
            ))}
          </div>
        </div>
      </Link>
    </li>
  );
};

export default MainListItem;
