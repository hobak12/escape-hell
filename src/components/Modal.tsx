import "./modal.css";
import checkList from "../data/checkYourSelf.json";
import { useState } from "react";

interface ModalType {
  level: string;
  open: boolean;
  close: () => void;
  header: string;
}

interface checkListType {
  id: number;
  content: string;
  isDone: boolean;
}

const Modal = ({ open, close, header, level }: ModalType) => {
  //로컬 스토리지에서 얻어오는 데이터 (전체 데이터여야한다(수정되었을 수도 아닐 수도 있다)) (json.parse해줘서 써야한다)
  const local_data = JSON.parse(localStorage.getItem("checked")!);

  //렌더링할 때 로컬 스토리지에 값이 없다면 json 전체 데이터  넣어주기
  const saveCheckList = () => {
    if (local_data === null || local_data === undefined) {
      //전체 json 데이터
      let checkListJson: checkListType[][] = checkList;
      localStorage.setItem("checked", JSON.stringify(checkListJson));
    }
  };
  saveCheckList();

  //로컬 스토리지 전체 데이터가 초기값.
  const [userCheck, setUserCheck] = useState(local_data);

  let level_data = userCheck[parseInt(level!) - 1];

  //setDone 해줄 때 전체 데이터 통째로 로컬 스토리지에서 들고 와서 인덱스로 구별
  // setDone으로 수정한 데이터 로컬 스토리지에 전체로 다시 넣어줌
  const setDone = (id: number) => {
    //usercheck는 전체 데이터 이므로 해당 레벨 데이터로 필터링

    const mapped_data = level_data.map((t: checkListType) =>
      t.id === id ? { ...t, isDone: !t.isDone } : t
    );

    const localCheckListJson = JSON.parse(localStorage.getItem("checked")!);
    localCheckListJson[parseInt(level!) - 1] = mapped_data;

    setUserCheck(localCheckListJson);
    localStorage.setItem("checked", JSON.stringify(localCheckListJson));
  };

  return (
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>
            <ul>
              {/* 페이지 이동할 때 params level로 해당 데이터만 로컬 스토리지에서
              가져와줌 */}
              {userCheck[parseInt(level!) - 1]?.map((item: checkListType) => (
                <li key={item.id}>
                  <input
                    type={"checkbox"}
                    onChange={() => setDone(item.id)}
                    checked={item.isDone}
                  />
                  {item.content}
                </li>
              ))}
            </ul>
          </main>
          <footer>
            <button className="close" onClick={close}>
              close
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;
