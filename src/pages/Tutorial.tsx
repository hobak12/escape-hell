import { VideoList } from "../components";
import CommentInputs from "../components/Comment/CommentInputs";
import CommentList from "../components/Comment/CommentList";
import Header from "../components/Header/Header";
import { useParams } from "react-router-dom";
import tutorial from "../data/tutorialList.json";

import Modal from "../components/modal/Modal";
import { useState } from "react";

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
        <Modal
          open={modalOpen}
          close={closeModal}
          header="Check yourslef!"
          level={level!}
        ></Modal>
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
