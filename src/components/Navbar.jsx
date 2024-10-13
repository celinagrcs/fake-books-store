import { FaBagShopping } from "react-icons/fa6";

const Navbar = () => {
  return (
    <header>
      <nav className="bg-[#fa6782] p-4 flex justify-between">
        <h1 className="text-white font-bold">Book Store</h1>
        <button>
          <FaBagShopping className="text-white w-5 h-5" />
        </button>
      </nav>
    </header>
  )
}

export default Navbar