import { Link } from "react-router";
import img from "../assets/Profile.jpeg";
import { useState } from "react";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const menuFunction = () => {
    setShowMenu((prev) => !prev);
  };
  return (
    <div className="mx-auto max-w-[1440px] ">
      <div className="flex justify-between items-center lg:py-6 px-3 py-6 text-[#C7C7C7] relative ">
        <h1 className="bebas-neue-regular text-[32px] hover:text-[#BBBBBB] cursor-pointer">
          Joseph ThankGod
        </h1>
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
          <div className="fixed inset-0 z-50 bg-black/50 ">
            {/* Left drawer */}
            <div className="absolute left-0 top-0 h-full w-72 bg-[#141313] p-6">
              <button
                onClick={menuFunction}
                className="absolute right-3 top-3"
                aria-label="Close menu"
              >
                <i className="ri-close-fill text-2xl"></i>
              </button>

              <nav className="mt-12 lg:hidden flex flex-col gap-5 inter text-left">
                <a href="#work" className="hover:text-[#BBBBBB]">
                  Work
                </a>
                <Link to="about-me" className="hover:text-[#BBBBBB]">
                  About
                </Link>
                <a href="#contact" className="hover:text-[#BBBBBB]">
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

      <div className="flex items-center flex-col lg:flex-row  justify-between w-full lg:px-12 lg:py-6 px-3 mt-6">
        <div>
          <h1 className="bebas-neue-regular lg:text-[101px] text-[57px] lg:leading-[90px] leading-[65px] text-[#FFFFFF]">
            HI, I AM <br /> JOSEPH THANKGOD
          </h1>
          <p className="text-[#C7C7C7] manrope text-[16px] lg:text-[18px]">
            A Lagos based full stack developer passionate about building <br />
            scalable, accessible, and user friendly applications.
          </p>

          <div className="flex items-center gap-3 mt-6 ">
            <a
              className="flex bg-[#D3E97A]  hover:bg-[#BDD166] w-[163px] lg:w-[187px] gap-6 justify-center items-center h-[48px] lg:h-[54px] rounded-full "
              href="#contact"
            >
              <p className=" text-[#0A0A0A] font-semibold manrope text-[13px] lg:text-[16px]">
                Contact me
              </p>

              <div className="bg-black lg:h-[16px] lg:w-[16px] h-[40px] w-[40px] rounded-full flex items-center justify-center ">
                <i className="ri-arrow-right-up-line lg:hidden"></i>
              </div>
            </a>

            <div className="flex gap-3 items-center">
              <a
                href="https://www.linkedin.com/in/joseph-thankgod-3b3a08308?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                className="bg-[#222222] lg:h-[54px] lg:w-[54px] w-[48px] h-[48px] rounded-full flex items-center justify-center "
              >
                <i className="fa-brands fa-linkedin-in text-[#D3E97A] text-2xl hover:text-[#BDD166]"></i>
              </a>

              <a
                href="https://github.com/Joseph-web-create"
                target="_blank"
                className="bg-[#222222] lg:w-[54px] w-[48px] h-[48px] rounded-full flex items-center justify-center"
              >
                <i className="fa-brands fa-github text-[#D3E97A] hover:text-[#BDD166] text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="lg:w-[600px] w-full mt-8 lg:mt-0">
          <img
            src={img}
            alt="My profile Img"
            className="lg:w-[600px] lg:h-[700px] w-full h-[400px] object-cover lg:rounded-2xl rounded-lg mt-5 "
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
