import img from "../assets/Profile.jpeg";

function Header() {
  return (
    <div className="mx-auto max-w-[1440px] ">
      <div className="flex items-center flex-col lg:flex-row md:flex-row   justify-between w-full lg:px-12 lg:py-6 px-3 mt-6">
        <div>
          <h1 className="bebas-neue-regular lg:text-[101px] text-[57px] lg:leading-[90px] leading-[65px] text-[#FFFFFF]">
            HI, I AM <br /> JOSEPH THANKGOD
          </h1>
          <p className="text-[#C7C7C7] manrope text-[16px] lg:text-[18px]">
            A Lagos based full stack developer passionate about building <br />
            scalable, accessible, and user friendly applications.
          </p>

          <div className="flex items-center gap-3 mt-6 md:flex-row">
            <a
              className="flex bg-[#D3E97A]  hover:bg-[#BDD166] w-[160px] lg:w-[187px] gap-6 justify-center items-center h-[48px] lg:h-[54px] rounded-full "
              href="#contact"
            >
              <p className=" text-[#0A0A0A] font-bold manrope text-[13px] lg:text-[16px]">
                Contact me
              </p>

              <div className="bg-black lg:h-[12px] lg:w-[12px] h-[40px] w-[40px] rounded-full flex items-center justify-center">
                <i className="ri-arrow-right-up-line lg:hidden text-white text-2xl"></i>
              </div>
            </a>

            <div className="flex gap-3 items-center md:flex-col lg:flex-row">
              <a
                href="https://www.linkedin.com/in/joseph-thankgod-3b3a08308?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                className="bg-[#222222] lg:h-[54px] lg:w-[54px] w-[48px] h-[48px] rounded-full flex items-center justify-center "
              >
                <i className="fa-brands fa-linkedin-in text-[#D3E97A] text-[16px] lg:text-[18px] hover:text-[#BDD166]"></i>
              </a>

              <a
                href="https://github.com/Joseph-web-create"
                target="_blank"
                className="bg-[#222222] lg:w-[54px] w-[48px] h-[48px] rounded-full flex items-center justify-center"
              >
                <i className="fa-brands fa-github text-[#D3E97A] hover:text-[#BDD166]  text-[16px] lg:text-[18px]"></i>
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
