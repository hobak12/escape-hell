import { VideoList } from "../components";
import CommentInputs from "../components/Comment/CommentInputs";
import CommentList from "../components/Comment/CommentList";
import Header from "../components/Header/Header";
import { useParams } from "react-router-dom";
import tutorial from "../data/tutorialList.json";
import checkList from "../data/checkYourSelf.json";
import { useState } from "react";
import Modal from "../components/Modal";

interface checkListType {
  id: number;
  content: string;
  isDone: boolean;
}

//처음에 딱 한번 로컬 스토리지에 전체 데이터를 저장
//setDone 해줄 때 전체 데이터 통째로 로컬 스토리지에서 들고 와서 인덱스로 구별
// setDone으로 수정한 데이터 로컬 스토리지에 전체로 다시 넣어줌

//페이지 이동할 때 params level로 해당 데이터만 로컬 스토리지에서 가져와줌
const Tutorial = () => {
  const { level } = useParams();
  const { title, techStackIcon } = tutorial[parseInt(level!) - 1];
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  //전체 json 데이터

  //로컬 스토리지에서 얻어오는 데이터 (전체 데이터여야한다(수정되었을 수도 아닐 수도 있다)) (json.parse해줘서 써야한다)

  const local_data = JSON.parse(localStorage.getItem("checked")!);

  //렌더링할 때 로컬 스토리지에 값이 없다면 json 전체 데이터  넣어주기

  const saveCheckList = () => {
    if (local_data === null || local_data === undefined) {
      let checkListJson: checkListType[][] = checkList;
      localStorage.setItem("checked", JSON.stringify(checkListJson));
    }
  };
  saveCheckList();

  //로컬 스토리지가 비어있으면 json 전체 데이터가 초기값, 아니면 로컬 스토리지 전체 데이터가 초기값.
  const [userCheck, setUserCheck] = useState(local_data);

  let level_data = userCheck[parseInt(level!) - 1];

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
    <>
      <div className="bg-neutral-900 min-h-screen">
        <Header />
        <div className="px-20">
          <h1 className="text-white text-6xl font-bold mx-3 my-8">{title}</h1>
          {techStackIcon.map((item) => (
            <VideoList
              level={level!}
              key={item.src}
              title={item.alt}
              src={item.src}
              url={item.url}
            />
          ))}
        </div>
        <button
          onClick={openModal}
          className="fixed right-5 bottom-5 bg-red-600 rounded-full p-2.5 w-10 h-10"
        >
          <img alt="checklist" src="../icons/checklist.png" />
        </button>
        <Modal open={modalOpen} close={closeModal} header="Check yourslef!">
          <div>
            {userCheck[parseInt(level!) - 1]?.map((item: checkListType) => (
              <div key={item.id}>
                <input
                  type={"checkbox"}
                  onChange={() => setDone(item.id)}
                  checked={item.isDone}
                />
                {item.content}
              </div>
            ))}
          </div>
        </Modal>
        <div className="bg-default flex-column text-white px-20 pt-2 pb-10">
          <div className="bg-header h-px" />
          <CommentInputs />
          <div className="bg-header h-px" />
          <CommentList />
        </div>
      </div>
    </>
  );
};

export default Tutorial;
