import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header";
import Main from "../pages/Main";
import Tutorial from "../pages/Tutorial";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/:level"
          element={
            <>
              <Header />
              <Tutorial />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
