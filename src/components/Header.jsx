import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
    const [isBtnClicked, setIsBtnClicked] = useState(false)
    const btnClickHandler = () =>{
            setIsBtnClicked((pre)=>!pre)
    }
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div>
            <Link to="/" className="flex items-center">
              <img
                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                className="mr-3 h-12"
                alt="Logo"
              />
              <button className={`h-[25px] lg:hidden ${isBtnClicked&&'rotate-90'}`} onClick={btnClickHandler}>
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_429_11066)">
                    <path
                      d="M3 6.00092H21M3 12.0009H21M3 18.0009H21"
                      stroke="#292929"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_429_11066">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0 0.000915527)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </Link>
          </div>
          <div className="flex items-center lg:order-2">
            <Link
              to="#"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Get started
            </Link>
          </div>
          <div
            className={`${!isBtnClicked&&'hidden'} justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2`}
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 ${
                      isActive && "text-green-400"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/about"}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 ${
                      isActive && "text-green-400"
                    }`
                  }
                >
                  About Us
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={"/contact"}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 ${
                      isActive && "text-green-400"
                    }`
                  }
                >
                  Contact Us
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={"/github"}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 ${
                      isActive && "text-green-400"
                    }`
                  }
                >
                  Github
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
