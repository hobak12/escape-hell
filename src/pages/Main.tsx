import { MainList } from "../components";
import tutorial from "../data/tutorialList.json";

const Main = () => {
  return (
    <div className="bg-neutral-900">
      <div className="h-screen">
        {/* main scroll */}
        ???
      </div>
      <MainList tutorial={tutorial} />
      <footer className="h-64"></footer>
    </div>
  );
};

export default Main;
