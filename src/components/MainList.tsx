import MainListItem from "./MainListItem";

type tutorialListType = {
  title: string;
  techStackIcon: TechIconImg[];
};
type MainListProps = {
  tutorial: tutorialListType[];
};

const MainList = ({ tutorial }: MainListProps) => {
  return (
    <ul className="max-w-screen-xl my-0 mx-auto flex flex-col gap-10">
      {tutorial.map(({ title, techStackIcon }, idx) => (
        <MainListItem
          key={idx}
          title={title}
          idx={idx}
          techStackIcons={techStackIcon}
        />
      ))}
    </ul>
  );
};

export default MainList;
