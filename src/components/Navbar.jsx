import { FaBagShopping } from "react-icons/fa6";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { cart } = useCart();

  return (
    <header>
      <nav className="fixed top-0 left-0 w-full z-40 bg-[#de4d86] p-4 flex justify-between ">
        <Link to='/'>
          <h1 className="text-white font-bold">Bugs Store</h1>
        </Link>
        <button>
          <Link to="/cart">
            <FaBagShopping className="text-white w-5 h-5" />
            {cart.length > 0 && (
              <span className="absolute bg-red-500 text-white rounded-full px-2 text-xs">
                {cart.length}
              </span>
            )}
          </Link>
        </button>
      </nav>
    </header>
  )
}

export default Navbar