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

      <div className="flex flex-col mt-16 gap-20">
        <div className="flex flex-col lg:flex-row items-center   gap-12">
          <div className="px-1 lg:px-0 w-[100%] lg:w-[600px]">
            <div className="w-[100%] max-w-[700px] h-[430px] lg:w-[600px] lg:h-[500px] bg-[#1A1A1A] rounded-[12px] flex flex-col justify-center items-center  relative">
              <div className="flex items-center justify-center bg-[#0A0A0A] rounded-full absolute top-2 lg:top-10 p-3 lg:left-10 left-6 ">
                <p className="text-white manrope text-sm">Team work</p>
              </div>

              <img
                src={instashot}
                alt="Instashot"
                className="w-[90%] max-w-[486px] lg:w-[486px] h-auto rounded-[12px] object-cover "
              />
            </div>
          </div>

          {/* Text Content */}
          <div className=" lg:w-1/2 manrope flex flex-col gap-6 px-1">
            <h2 className="text-white text-[24px] lg:text-[32px] leading-[110%]">
              Built an Instagram clone with authentication, media uploads, and
              real time features.
            </h2>
            <p className="text-[#C7C7C7] text-[16px] lg:text-[18px] leading-[150%] relaxed">
              Collaborated with a designer and developers to build a fully
              functional Instagram clone, featuring authentication, image
              uploads, likes, comments, and responsive design. The project
              strengthened my full stack skills, teamwork, and problem-solving
              abilities, marking a key milestone in my growth as a developer.
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
                LIVE DEMO
                <i className="ri-arrow-right-up-line  text-[18px] ml-2"></i>
                <div className="divider bg-[#D3E97A] hover:text-[#BDD166] h-[2px] mt-0" />
              </a>

              <a
                href="https://github.com/Joseph-web-create/Instagram-clone"
                target="_blank"
                className="text-[#D3E97A] hover:text-[#BDD166]"
              >
                SEE ON GITHUB
                <i className="fa-brands fa-github  text-[18px] ml-2"></i>
                <div className="divider bg-[#D3E97A] hover:text-[#BDD166] h-[2px] mt-0" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="px-1 lg:px-0 w-[100%] lg:w-[600px]">
            <div className="w-[100%] max-w-[700px] h-[380px] lg:w-[600px] lg:h-[500px] bg-[#1A1A1A] rounded-[12px] flex flex-col justify-center items-center  relative ">
              <img
                src={shortly}
                alt="Shortly"
                className="w-[90%] max-w-[486px] lg:w-[486px] h-auto rounded-[12px] object-cover"
              />
            </div>
          </div>
          {/* Text Content */}
          <div className=" lg:w-1/2 manrope flex flex-col gap-6 px-1">
            <h2 className="text-white text-[24px] lg:text-[32px] leading-[150%]">
              Simplify long links into short, shareable URLs.
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
                <i className="ri-arrow-right-up-line  text-[18px] ml-2"></i>
                <div className="divider bg-[#D3E97A] hover:text-[#BDD166] h-[2px] mt-0" />
              </a>

              <a
                href="https://github.com/Joseph-web-create/Shortly"
                target="_blank"
                className="text-[#D3E97A] hover:text-[#BDD166]"
              >
                SEE ON GITHUB
                <i className="fa-brands fa-github  text-[18px] ml-2"></i>
                <div className="divider bg-[#D3E97A] hover:text-[#BDD166] h-[2px] mt-0" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="px-1 lg:px-0 w-[100%] lg:w-[600px]">
            <div className="w-[100%] max-w-[700px] h-[380px] lg:w-[600px] lg:h-[500px] bg-[#1A1A1A] rounded-[12px] flex flex-col justify-center items-center  relative ">
              <img
                src={House}
                alt="House Renter"
                className="w-[90%] max-w-[486px] lg:w-[486px] h-auto rounded-[12px] object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className=" lg:w-1/2 manrope flex flex-col gap-6 px-1">
            <h2 className="text-white text-[24px] lg:text-[32px] leading-[150%]">
              House Rental Platform
            </h2>

            <p className="text-[#C7C7C7] text-[16px] lg:text-[18px] leading-relaxed">
              Built a full stack responsive house rental platform during my
              internship, featuring property listings, booking flow, and
              seamless navigation. The project enhanced my full stack skills,
              accessibility knowledge, and experience in scalable web solutions.
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
                <i className="ri-arrow-right-up-line  text-[18px] ml-2"></i>
                <div className="divider bg-[#D3E97A] hover:text-[#BDD166] h-[2px] mt-0" />
              </a>

              <a
                href="https://github.com/Joseph-web-create/TSA_INTERNSHIP_TASK_3"
                target="_blank"
                className="text-[#D3E97A] hover:text-[#BDD166]"
              >
                SEE ON GITHUB
                <i className="fa-brands fa-github text-[18px] ml-2"></i>
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
