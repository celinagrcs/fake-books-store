import PropTypes from "prop-types";
import { AiOutlineClose } from "react-icons/ai";
import pinguino from "../../public/assets/pucho.png"
import { useGame } from "../context/GameContext";
import BugModal from "./BugModal";
import { useState } from "react";

const InstructionsModal = ({ onClose }) => {
  const { incrementProgress } = useGame();
  const [showModal, setShowModal] = useState(false);


  const handleBug = () => {
    incrementProgress('instructions-img');
    setShowModal(true);
  }

  return (
    <article className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="relative bg-white p-8 rounded shadow-md w-full max-w-md">
      <button 
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        onClick={onClose}
      >
        <AiOutlineClose size={20} />
      </button>
      <div className="flex justify-evenly items-center ">
        <img src={pinguino} alt="" className="w-48" onClick={handleBug} />
        <h2 className="text-2xl font-bold mb-3 text-center">¡Feliz cumple Sofi! 💗</h2>
      </div>
      <p className="text-center mb-2 mt-5 ">Holi, soy Pucho, el pingüino. ¡Te propongo un desafío especial!
      Hay 10 bugs 🐞 escondidos por toda la página, y necesito de tu ayuda para encontrarlos. 
      <br />
      <br />
      Cada vez que descubras uno, estarás más cerca de completar el juego. Te daré una pequeña pista: haz clic en mi cara para comenzar. ¡Buena suerte!
      </p>
      <div className="flex justify-center">
      </div>
    </div>

    {showModal && <BugModal onClose={() => setShowModal(false)} />}
  </article>
  )
}

export default InstructionsModal;

InstructionsModal.propTypes = {
  onClose: PropTypes.func.isRequired, 
};