import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Tutorial from "../pages/Tutorial";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/:level" element={<Tutorial />} />
    </Routes>
  );
};

export default Router;
