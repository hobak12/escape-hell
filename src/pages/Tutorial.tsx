import { VideoList } from "../components";
import CommentInputs from "../components/Comment/CommentInputs";
import CommentList from "../components/Comment/CommentList";
import Header from "../components/Header/Header";
import { useParams } from "react-router-dom";
import tutorial from "../data/tutorialList.json";
import checkList from "../data/checkYourSelf.json";
import { useEffect, useState } from "react";
import Modal from "../components/Modal";

const Tutorial = () => {
  const { level } = useParams();
  const { title, techStackIcon } = tutorial[parseInt(level!) - 1];
  const checkListJson = checkList[parseInt(level!) - 1];
  const [userCheck, setUserCheck] = useState(checkListJson);
  console.log(1);
  const [modalOpen, setModalOpen] = useState(false);
  const local_check = localStorage.getItem("checked");
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const setDone = (id: number) => {
    const newChecked = [...userCheck];
    const idx = newChecked.findIndex((t) => t.id === id);
    newChecked[idx].isDone = !newChecked[idx].isDone;
    setUserCheck(newChecked);
  };

  useEffect(() => {
    const getData = () => {
      if (local_check?.includes("true")) {
        console.log(2);
        setUserCheck(JSON.parse(local_check!));
      } else {
        console.log(3);
        setUserCheck(checkListJson);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const saveCheckList = () => {
      localStorage.setItem("checked", JSON.stringify(userCheck));
      console.log(4);
    };
    saveCheckList();
  }, [userCheck]);

  return (
    <>
      <div className="bg-neutral-900 min-h-screen">
        <Header />
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
        <button onClick={openModal}>모달팝업</button>
        <Modal open={modalOpen} close={closeModal} header="Check yourslef!">
          <div>
            {userCheck?.map((item) => (
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
        <CommentInputs />
        <div className="bg-header h-px" />
        <CommentList />
      </div>
    </>
  );
};

export default Tutorial;
