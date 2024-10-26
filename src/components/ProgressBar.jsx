import { useGame } from "../context/GameContext"


const ProgressBar = () => {
  const { progress } = useGame();

  return (
    <div className="w-full flex justify-center mt-20">
    <div className="w-2/3 bg-gray-300 h-4 rounded">
      <div
        className="bg-[#de4d86] h-full rounded transition-all duration-300"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  </div>
  )
};

export default ProgressBar;