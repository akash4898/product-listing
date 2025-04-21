import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Context } from "../Context/MainContext";
import toast from "react-hot-toast";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { cart, setcart,user,setUser } = useContext(Context);

  const logout =()=>{
    setUser('');
    toast.success("User LoggedOut Successfully")
    navigate('/login');
  }

  useEffect(
    ()=>{
      if(!user && location.pathname != '/register'){
          navigate('/login');
      }
      if (user && location.pathname == "/login") {
        navigate("/");
      }
    },[user,location.pathname]
  )

  return (
    <header className="pb-6 bg-white lg:pb-0 shadow-lg sticky top-0 z-[1]">
      <div className="px-8 mx-auto max-w-7xl sm:px-10 lg:px-16">
        {/* Navigation Bar */}
        <nav className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex">
              <img
                className="w-auto h-8 lg:h-10"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg"
                alt="Logo"
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
              </svg>
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
            <Link to="/" className="text-base font-medium text-black hover:text-blue-600">Home</Link>
            <Link to="/about" className="text-base font-medium text-black hover:text-blue-600">About</Link>
            <Link to="/contact" className="text-base font-medium text-black hover:text-blue-600">Contact</Link>
            <Link to="/shop" className="text-base font-medium text-black hover:text-blue-600">Shop</Link>
          </div>

          {/* Desktop Cart & Buttons */}
          <div className="hidden lg:flex items-center space-x-5">
            <div className="flex items-center space-x-5">
              <Link to="/cart">
                <button className="relative">
                  <span className="text-2xl">🛒</span>
                  <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full px-2">
                    {cart ? cart.length : 0}
                  </span>
                </button>
              </Link>
            </div>
            <button
              className="px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700"
              onClick={() => setcart([])}
            >
              Clear Cart
            </button>
            {
              !user
              ?
              <Link to={"/login"}>
                <button className="px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700">Login</button>
              </Link>
              :
              <button onClick={logout} className="px-6 py-3 text-white bg-gray-600 rounded-md hover:bg-gray-700">Logout</button>
            }
          </div>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden">
            <div className="flex flex-col px-6 space-y-2">
              <Link to="/" className="py-2 text-base font-medium text-black hover:text-blue-600">Home</Link>
              <Link to="/about" className="py-2 text-base font-medium text-black hover:text-blue-600">About</Link>
              <Link to="/contact" className="py-2 text-base font-medium text-black hover:text-blue-600">Contact</Link>
              <Link to="/shop" className="py-2 text-base font-medium text-black hover:text-blue-600">Shop</Link>
            </div>
            <div className="px-6 mt-6 flex flex-col space-y-4">
              <Link to="/cart">
                <button className="relative w-full py-3 bg-gray-100 text-black rounded-md">
                  <span className="text-2xl">🛒</span>
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
                    {cart ? cart.length : 0}
                  </span>
                </button>
              </Link>
              <button
                className="w-full py-3 bg-red-600 text-white rounded-md hover:bg-red-700"
                onClick={() => setcart([])}
              >
                Clear Cart
              </button>
              {
                !user 
                ?
                <Link to={"/login"}>
                  <button className="block w-full py-3 text-center text-white bg-blue-600 rounded-md hover:bg-blue-700">Login</button>
                </Link>
                :
                <button className="block w-full py-3 text-center text-white bg-gray-600 rounded-md hover:bg-gray-700">Logout</button>
              }
              
              
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
