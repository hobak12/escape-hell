import { MainList, Landing } from "../components";
import tutorial from "../data/tutorialList.json";

const Main = () => {
  return (
    <div className="bg-neutral-900">
      <Landing />
      <MainList tutorial={tutorial} />
      <footer className="h-64"></footer>
    </div>
  );
};

export default Main;
