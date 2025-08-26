import { Link } from "react-router";
import img from "../assets/Profile.jpeg";

function Header() {
  return (
    <div className="mx-auto max-w-[1440px] ">
      <div className="flex justify-between items-center lg:py-6 px-2 py-6 text-[#C7C7C7] ">
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
      </div>

      <div className="flex items-center flex-col lg:flex-row  justify-between w-full lg:px-12 lg:py-6 px- mt-6">
        <div>
          <h1 className="bebas-neue-regular lg:text-[101px] text-[57px] lg:leading-[90px] leading-[65px]">
            HI, I AM <br /> JOSEPH THANKGOD
          </h1>
          <p className="text-[#C7C7C7] manrope text-[16px] lg:text-[18px]">
            A Lagos based full stack developer passionate about building <br />
            scalable, accessible, and user friendly applications.
          </p>

          <div className="flex items-center gap-3 mt-6 ">
            <a
              className="flex bg-[#D3E97A]  hover:bg-[#BDD166] w-[187px] gap-6 justify-center items-center p-3 rounded-full "
              href="#contact"
            >
              <p className=" text-[#0A0A0A] font-semibold manrope">
                Contact me
              </p>

              <div className="bg-black lg:h-[16px] lg:w-[16px] h-[30px] w-[30px] rounded-full flex items-center justify-center ">
                <i className="ri-arrow-right-up-line lg:hidden"></i>
              </div>
            </a>

            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/joseph-thankgod-3b3a08308?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                className="bg-[#222222] h-[54px] w-[54px] rounded-full flex items-center justify-center "
              >
                <i className="fa-brands fa-linkedin-in text-[#D3E97A] text-2xl hover:text-[#BDD166]"></i>
              </a>

              <a
                href="https://github.com/Joseph-web-create"
                target="_blank"
                className="bg-[#222222] h-[54px] w-[54px] rounded-full flex items-center justify-center"
              >
                <i className="fa-brands fa-github text-[#D3E97A] hover:text-[#BDD166] text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="lg:w-[600px] w-full mt-8">
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
