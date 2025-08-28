import Form from "./Form";

function Contact() {
  return (
    <div className='mx-auto max-w-[1440px]"' id="contact">
      <div className="pb-10 flex flex-col lg:flex-row justify-between gap-10 max-w-[1224px] mx-auto">
        <div className=" mx-w-[600px] px-2">
          <h2 className="text-[#FFFFFF] text-[76px] bebas-neue-regular">
            Let’s connect
          </h2>
          <div className="flex items-center gap-2">
            <p className="text-[#C7C7C7] text-[16px] lg:text-[18px] mt-[-20px]">
              Say hello at
            </p>
            <div className="text-[#FFFFFF] ">
              <a href="mailto:thankgodjoseph789@gmail.com" target="_blank">
                thankgodjoseph789@gmail.com
              </a>

              <div className="divider border border-[#D3E97A] mt-0 h-0" />
            </div>
          </div>

          <div className="flex gap-3 items-center  mt-8">
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

            <a
              href="https://x.com/joe__tj?s=21"
              target="_blank"
              className="bg-[#222222] lg:h-[54px] lg:w-[54px] w-[48px] h-[48px] rounded-full flex items-center justify-center "
            >
              <i className="ri-twitter-x-line text-[#D3E97A] text-[16px] lg:text-[18px] hover:text-[#BDD166]"></i>
            </a>
          </div>

          {/* <p className="text-[#C7C7C7]">
              &copy; {new Date().getFullYear()} Joseph ThankGod
            </p> */}
        </div>
        <Form />
      </div>
    </div>
  );
}

export default Contact;
