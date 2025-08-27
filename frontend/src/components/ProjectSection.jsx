import instashot from "../assets/project1.png";
import shortly from "../assets/project2.png";
import House from "../assets/project3.png";

function ProjectSection() {
  return (
    <div className="mx-auto max-w-[1440px] bg-black px-4 py-12" id="work">
      {/* Header */}
      <div className="max-w-2xl">
        <h2 className="lg:text-[76px] text-[43px] bebas-neue-regular text-white">
          Featured Projects
        </h2>
        <p className="text-[#C7C7C7] manrope text-[16px] lg:text-[18px]">
          Here are some of the selected projects that not only showcase my
          skills and experience as a Full Stack Developer, but also reflect my
          ability to solve problems, create user-friendly solutions, and deliver
          high quality results.
        </p>
      </div>

      {/* Projects */}

      <div className="flex items-center justify-center flex-col mt-16 gap-20">
        <div className=" flex flex-col lg:flex-row items-center  justify-between gap-12">
          <div className="w-[393px] h-[380px] lg:w-[600px] lg:h-[600px] bg-[#1A1A1A] rounded-[12px] flex flex-col justify-center items-center  relative">
            <div className="flex items-center justify-center   bg-[#0A0A0A] rounded-full absolute top-6 lg:top-10 p-3 lg:left-10 left-4 ">
              <p className="text-white manrope text-sm">Team work</p>
            </div>

            <img
              src={instashot}
              alt="Instashot"
              className="w-[343px] max-w-[486px] lg:w-[486px] h-auto rounded-[12px] object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 manrope flex flex-col gap-6 px-2">
            <h2 className="text-white text-[24px] lg:text-[32px] leading-[110%]">
              Developed an Instagram clone with full functionality, including
              account creation, image uploads, likes, comments, and real-time
              updates.
            </h2>
            <p className="text-[#C7C7C7] text-[16px] lg:text-[18px] leading-relaxed">
              Teamed up with a designer and fellow developers to build a fully
              functional Instagram clone as part of my learning process in full
              stack development. This project gave me hands on experience with
              user authentication, image uploads, likes, comments, and
              responsive design. Beyond the technical skills, it also
              strengthened my collaboration and problem-solving abilities,
              making it a key milestone in my growth as a developer.
            </p>

            {/* Project Info */}
            <div className="border-t border-[#333] pt-4 space-y-3">
              <div className="flex justify-between text-white">
                <p>Year</p>
                <p className="text-[#C7C7C7]">2025</p>
              </div>
              <div className="flex justify-between text-white border-b border-t border-[#333] pt-3 pb-3">
                <p>Role</p>
                <p className="text-[#C7C7C7]">Frontend, Backend</p>
              </div>
            </div>

            {/* links */}
            <div className="flex gap-6 items-center">
              <a
                href="https://instagram-clone-mu-ten.vercel.app/auth/login"
                target="_blank"
                className="text-[#D3E97A] hover:text-[#BDD166]"
              >
                LIVE DEMO{" "}
                <i className="ri-arrow-right-up-line text-2xl ml-2"></i>
                <div className="divider bg-[#D3E97A] hover:text-[#BDD166] h-[2px] mt-0" />
              </a>

              <a
                href="https://github.com/Joseph-web-create/Instagram-clone"
                target="_blank"
                className="text-[#D3E97A] hover:text-[#BDD166]"
              >
                SEE ON GITHUB
                <i className="fa-brands fa-github text-2xl ml-2"></i>
                <div className="divider bg-[#D3E97A] hover:text-[#BDD166] h-[2px] mt-0" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-[393px] h-[380px] lg:w-[600px] lg:h-[600px] bg-[#1A1A1A] rounded-[12px] flex flex-col justify-center items-center  relative">
            <img
              src={shortly}
              alt="Shortly"
              className="w-[343px] max-w-[486px] lg:w-[486px] h-auto rounded-[12px] object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 manrope flex flex-col gap-6 px-2">
            <h2 className="text-white text-[24px] lg:text-[32px] leading-[150%]">
              Shortly, <br /> Shorten long links into simple, shareable URLs
            </h2>

            <p className="text-[#C7C7C7] text-[16px] lg:text-[18px] leading-relaxed">
              Engineered a streamlined URL shortener application, overcoming
              challenges in optimizing link management and responsive design.
              Leveraged the project to strengthen Front End and Back End
              development skills while ensuring a seamless user experience.
            </p>

            {/* Project Info */}
            <div className="border-t border-[#333] pt-4 space-y-3">
              <div className="flex justify-between text-white">
                <p>Year</p>
                <p className="text-[#C7C7C7]">2025</p>
              </div>
              <div className="flex justify-between text-white border-b border-t border-[#333] pt-3 pb-3">
                <p>Role</p>
                <p className="text-[#C7C7C7]">Frontend, Backend</p>
              </div>
            </div>

            <div className="flex gap-6 items-center">
              <a
                href="https://shortly-black-sigma.vercel.app"
                target="_blank"
                className="text-[#D3E97A] hover:text-[#BDD166]"
              >
                LIVE DEMO
                <i className="ri-arrow-right-up-line text-2xl ml-2"></i>
                <div className="divider bg-[#D3E97A] hover:text-[#BDD166] h-[2px] mt-0" />
              </a>

              <a
                href="https://github.com/Joseph-web-create/Shortly"
                target="_blank"
                className="text-[#D3E97A] hover:text-[#BDD166]"
              >
                SEE ON GITHUB
                <i className="fa-brands fa-github text-2xl ml-2"></i>
                <div className="divider bg-[#D3E97A] hover:text-[#BDD166] h-[2px] mt-0" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-[393px] h-[380px] lg:w-[600px] lg:h-[600px] bg-[#1A1A1A] rounded-[12px] flex flex-col justify-center items-center  relative">
            <img
              src={House}
              alt="House Renter"
              className="w-[343px] max-w-[486px] lg:w-[486px] h-auto rounded-[12px] object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 manrope flex flex-col gap-6 px-2">
            <h2 className="text-white text-[24px] lg:text-[32px] leading-[150%]">
              House Rental Platform
            </h2>

            <p className="text-[#C7C7C7] text-[16px] lg:text-[18px] leading-relaxed">
              Completed as part of my internship, I designed and developed a
              responsive house rental platform with both Front End and Back End
              functionality. The platform featured intuitive property listings,
              a smooth booking flow, and user-friendly navigation. This project
              strengthened my full stack development skills, deepened my
              understanding of accessibility, and provided hands-on experience
              in building scalable, real-world web solutions.
            </p>

            {/* Project Info */}
            <div className="border-t border-[#333] pt-4 space-y-3">
              <div className="flex justify-between text-white">
                <p>Year</p>
                <p className="text-[#C7C7C7]">2025</p>
              </div>
              <div className="flex justify-between text-white border-b border-t border-[#333] pt-3 pb-3">
                <p>Role</p>
                <p className="text-[#C7C7C7]">Frontend, Backend</p>
              </div>
            </div>

            <div className="flex gap-6 items-center">
              <a
                href="https://tsa-internship-task-3.vercel.app/"
                target="_blank"
                className="text-[#D3E97A] hover:text-[#BDD166]"
              >
                LIVE DEMO
                <i className="ri-arrow-right-up-line text-2xl ml-2"></i>
                <div className="divider bg-[#D3E97A] hover:text-[#BDD166] h-[2px] mt-0" />
              </a>

              <a
                href="https://github.com/Joseph-web-create/TSA_INTERNSHIP_TASK_3"
                target="_blank"
                className="text-[#D3E97A] hover:text-[#BDD166]"
              >
                SEE ON GITHUB
                <i className="fa-brands fa-github text-2xl ml-2"></i>
                <div className="divider bg-[#D3E97A] hover:text-[#BDD166] h-[2px] mt-0" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectSection;
