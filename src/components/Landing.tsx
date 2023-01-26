const Landing = () => {
  // 입장하기 스크롤 버튼입니다.
  const scrollToList = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <div className="bg-neutral-900 min-h-screen max-w-screen-xl mx-auto my-0 flex flex-col items-center gap-10">
      {/* <div className="h-1/4">?</div> */}
      <h1 className="text-white font-bold text-5xl mt-48 ">Escape Hell !</h1>
      <h4 className="text-white font-bold text-3xl">
        지옥을 가장 빨리 나가는 길입니다.
      </h4>
      <button
        className="bg-red-700 font-bold text-2xl w-48 py-2 rounded-lg"
        onClick={scrollToList}
      >
        입장하기
      </button>
    </div>
  );
};

export default Landing;
