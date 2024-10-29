import { useCart } from "../context/CartContext";
import image from '../../public/assets/minerva.jpeg';
import { useGame } from "../context/GameContext";
import { useState } from "react";
import BugModal from "../components/BugModal";

const CartPage = () => {
  const { cart } = useCart();
  const { incrementProgress } = useGame();
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleRemoveFromCart = () => {
    incrementProgress('remove');
    setShowModal(true);
  };

  const handleProceedPayment = () => {
    if (Math.random() < 0.3) {  
      setIsLoading(true);
      incrementProgress('payment');
      setShowModal(true);
    }
  };  

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6 text-center mt-10">Carrito de Compras</h1>
      {cart.length === 0 ? (
        <div className="flex flex-col items-center">
          <p className="text-center text-gray-500 mb-2">No hay productos en el carrito </p>
          <img src={image} alt="Imagen de carrito vacío" className="w-80" />
        </div>
      ) : (
        <div className="bg-white shadow-md rounded-lg p-4">
          <ul className="space-y-4">
            {cart.map((book, index) => (
              <li key={index} className="flex flex-col md:flex-row items-center justify-between p-4 border-b last:border-none">
                <div className="flex items-center">
                  <img src={book.image} alt={book.title} className="w-16 h-24 object-cover rounded-md mr-4" />
                  <div className="flex flex-col">
                    <h2 className="text-xl font-semibold text-gray-800">{book.title}</h2>
                    <p className="text-gray-600">{book.author}</p>
                    <p className="text-green-600 font-bold">{book.price}</p>
                  </div>
                </div>
                <button 
                  className="mt-2 md:mt-0 bg-blue-500 text-white px-2 py-1 rounded" 
                  onClick={handleRemoveFromCart}>
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
          <div className="flex justify-end mt-4">
            <button 
              onClick={handleProceedPayment}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md">
              {isLoading ? "Cargando..." : "Proceder al Pago"}
            </button>
          </div>
        </div>
      )}
      {showModal && <BugModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default CartPage;
