function App() {
  const pageTitle = (
    <p className="text-2xl text-black font-bold">Pokemon Memory Card Game</p>
  )
  return (
    <>
      <div className="mainContainer flex flex-col w-[100vw] h-[100vh]">
        <div className="titleContainer bg-[#b3a125] p-2 pb-3 w-[100%] text-center h-fit">
          {pageTitle}
        </div>
        <div className="infoContainer bg-[#b3a125] ">
          <div className="gameDescription">
            <div className="descriptionText text-center">
              Try to click all images only once!
            </div>
          </div>
          <div className="scoresContainer mt-2 mb-2 flex flex-row justify-around">
            <div className="currentScore">Current Score: 2</div>
            <div className="bestScore">Best Score: 12</div>
          </div>
        </div>
        <div className="gameContainer bg-[#3b4cca] h-[100%]"></div>
        <div className="footer"></div>
      </div>
    </>
  )
}

export default App
