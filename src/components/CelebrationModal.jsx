import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import pinguino from "../../public/assets/pucho.png"

const CelebrationModal = ({ onClose }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {

    const timer = setTimeout(() => {
      setShowModal(true);
    }, 3000);

    return () => clearTimeout(timer);

  }, []);

  if (!showModal) return null;

  return (
    <article className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="relative bg-white p-6 rounded shadow-md w-full max-w-md animate-fadeInUp">
    <button 
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        onClick={onClose}
      >
      <AiOutlineClose size={20} />
      </button>
      <h2 className="text-2xl font-bold mb-3 text-center">¡YEEY encontraste todos los bugs!</h2>
      <p className="text-center mb-2">¡Gracias por la ayuda! espero que te haya gustado💕</p>
      <p className="text-center">PD: tenemos un reglito mas para vos🥰</p>
      <div className="flex justify-center items-center mt-8">
        <img src={pinguino} alt="" className="w-40 mb-4" />
      </div>
    </div>
  </article>
  )
}

export default CelebrationModal;

CelebrationModal.propTypes = {
  onClose: PropTypes.func.isRequired, 
};