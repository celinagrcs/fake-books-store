import { useCart } from "../context/CartContext"
import image from '../../public/assets/minerva.jpeg'
import { useGame } from "../context/GameContext";
import { useState } from "react";
import BugModal from "../components/BugModal";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cart } = useCart();
  const { incrementProgress } = useGame();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleRemoveFromCart = () => {
    incrementProgress();
    setShowModal(true);
  }

  const handleProceedPayment = () => {
    navigate('/errorPage');
    incrementProgress();
    setShowModal(true);
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Carrito de Compras</h1>
      {cart.length === 0 ? (
        <div className="flex flex-col items-center">
          <p className="text-center text-gray-500 mb-2">No hay productos en el carrito </p>
          <img src={image} alt="" className="w-80" />
        </div>
      ) : (
        <div className="bg-white shadow-md rounded-lg p-4">
          <ul>
            {cart.map((book, index) => (
              <li key={index} className="flex items-center justify-between p-4 border-b last:border-none">
                <div className="flex items-center">
                <img src={book.image} alt={book.title} className="w-16 h-20 object-cover rounded-md mr-4" />
                <h2 className="text-xl font-semibold text-gray-800">{book.title}</h2>
                    <p className="text-gray-600 m-2">{book.author}</p>
                    <p className="text-green-600 font-bold">{book.price}</p>
                </div>
                <button 
                className="bg-blue-500 text-white px-2 py-1 rounded" 
                onClick={() => handleRemoveFromCart()}>Eliminar</button>
              </li>
            ))}
          </ul>
          <div className="flex justify-end mt-4">
            <button 
            onClick={() => handleProceedPayment()}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md">
                Proceder al Pago
            </button>
          </div>
        </div>
      )}
          {showModal && <BugModal onClose={() => setShowModal(false)} />}
    </div>
  )
}

export default CartPage;
