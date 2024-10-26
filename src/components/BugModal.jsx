import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import bug1 from "../../public/assets/bug1.jpeg";
import bug2 from "../../public/assets/bug2.jpeg";
import bug3 from "../../public/assets/bug3.jpeg";
import { AiOutlineClose } from "react-icons/ai";

const BugModal = ({ onClose }) => {

  const [randomImage, setRandomImage] = useState(null);

  useEffect(() => {
    const bugsImg = [bug1, bug2, bug3];
    const randomIndex = Math.floor(Math.random() * bugsImg.length);
    setRandomImage(bugsImg[randomIndex])
  }, []);

  if (!randomImage) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="relative bg-white p-6 rounded shadow-md w-full max-w-md">
    <button 
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        onClick={onClose}
      >
      <AiOutlineClose size={20} />
      </button>
      <h2 className="text-2xl font-bold mb-3 text-center">¡Encontraste el bug!</h2>
      <p className="text-center mb-2">¡Bien hecho! Sigue buscando más errores.</p>
      <div className="flex justify-center">
        <img src={randomImage} alt="" className="w-40 mb-4" />
      </div>
    </div>
  </div>
  )
}

export default BugModal;

BugModal.propTypes = {
  onClose: PropTypes.func.isRequired, 
};