import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";

/**
 *
 * @param a 일케 작성 가능~
 * @returns
 */
function App() {
  // const getData = async () => {
  //* select -> 일부 column만 가져오고 싶을 때 사용하셈
  //* 검색 .eq("column","value")
  //* 하나만 불러오기 .single() -> array destructuring를 하기 귀찮을 때 사용하셈
  //   const { data } = await supabase.from("comment").select().eq("id", "2977dd1c-1f82-4ff8-bf7f-c6b5961b88d4").single();
  //   console.log("data", data);
  // };
  // useEffect(() => {
  //   getData();
  // }, []);
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
