import MainListItem from "./MainListItem";

type tutorialListType = {
  title: string;
  techStackIcon: TechIconImg[];
};

const tutorialList: tutorialListType[] = [
  {
    title: "기초공사",
    techStackIcon: [
      { src: "HTML5", alt: "HTML 5" },
      { src: "CSS3", alt: "CSS 3" },
      { src: "JavaScript", alt: "JavaScript" },
    ],
  },
  {
    title: "라이브러리",
    techStackIcon: [
      { src: "Angular", alt: "Garbage" },
      { src: "Vue", alt: "Vue.js" },
      { src: "React", alt: "React.js" },
    ],
  },
  {
    title: "라이브러리 심화",
    techStackIcon: [{ src: "React", alt: "React.js" }],
  },
];

const MainList = () => {
  return (
    <ul className="max-w-screen-xl my-0 mx-auto flex flex-col gap-10">
      {tutorialList.map(({ title, techStackIcon }, idx) => (
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
