import { useState } from "react";
import { Link, Outlet } from "react-router";

function Layout() {
  const [showMenu, setShowMenu] = useState(false);

  const menuFunction = () => {
    setShowMenu((prev) => !prev);
  };
  return (
    <div className="bg-black ">
      <div className="mx-auto max-w-[1440px] ">
        <div className="flex justify-between items-center lg:py-6 px-3 py-6 text-[#C7C7C7] relative ">
          <Link to={"/"}>
            <h1 className="bebas-neue-regular text-[32px] hover:text-[#BBBBBB] cursor-pointer">
              Joseph ThankGod
            </h1>
          </Link>
          <div className="lg:flex gap-10 items-center inter hidden">
            <a href="#work" className="hover:text-[#BBBBBB]">
              Work
            </a>
            <Link to={"about-me"} className="hover:text-[#BBBBBB]">
              About
            </Link>
            <a href="#contact" className="hover:text-[#BBBBBB]">
              Contact
            </a>
          </div>

          {showMenu && (
            <div className="fixed inset-0 z-40 bg-black/50 ">
              {/* Left drawer */}
              <div className="absolute left-0 top-0 h-full w-72 bg-[#141313] p-6">
                <button
                  onClick={menuFunction}
                  className="absolute right-3 top-3 z-50"
                  aria-label="Close menu"
                >
                  <i className="ri-close-fill text-2xl"></i>
                </button>

                <nav className="mt-12 lg:hidden flex flex-col gap-5 inter text-left">
                  <a
                    href="#work"
                    className="hover:text-[#BBBBBB]"
                    onClick={menuFunction}
                  >
                    Work
                  </a>
                  <Link
                    to="about-me"
                    className="hover:text-[#BBBBBB]"
                    onClick={menuFunction}
                  >
                    About
                  </Link>
                  <a
                    href="#contact"
                    className="hover:text-[#BBBBBB]"
                    onClick={menuFunction}
                  >
                    Contact
                  </a>
                </nav>
              </div>
            </div>
          )}

          <div
            className="lg:hidden relative w-[32px] h-[24px] flex flex-col justify-evenly cursor-pointer"
            onClick={menuFunction}
          >
            <span
              className={`block h-[3px] w-full bg-[#C7C7C7] rounded transition-all duration-300 ease-in-out ${
                showMenu ? "rotate-45 translate-y-[5px]" : ""
              }`}
            />

            <span
              className={`block h-[3px] w-full bg-[#C7C7C7] rounded transition-all duration-300 ease-in-out ${
                showMenu ? "-rotate-45 -translate-y-[5px]" : ""
              }`}
            />
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Layout;
