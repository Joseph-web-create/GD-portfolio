import instashot from "../assets/project1.png";
function ProjectSection() {
  return (
    <div className="mx-auto max-w-[1440px] bg-black">
      <div className="lg:w-[600px] w-[343px] px-3" id="work">
        <h2 className="lg:text-[76px] text-[43px] bebas-neue-regular text-[#FFFFFF]">
          Featured Projects
        </h2>
        <p className="text-[#C7C7C7] manrope text-[16px] lg:text-[18px]">
          Here are some of the selected projects that not only showcase my
          skills and experience as a Full Stack Developer, but also reflect my
          ability to solve problems, create user-friendly solutions, and deliver
          high quality results.
        </p>
      </div>

      <div className="mt-15 ">
        <div className="flex lg:flex-row flex-col items-center justify-evenly w-full gap-[48px]">
          <div className="w-[600px] h-[600px] bg-[#1A1A1A] flex flex-col justify-center items-start lg:items-center rounded-[12px] relative gap-5 ">
            <div className="flex items-center justify-center lg:w-[145px] lg:h-[37px] bg-[#0A0A0A] rounded-[100px] relative lg:absolute top-0 left-0 lg:top-10 lg:left-10">
              <p className="text-[#FFFFFF] manrope text-center ">Team work</p>
            </div>

            <img
              src={instashot}
              alt="Instashort"
              className="lg:w-[486px] lg:h-[347px] object-center w-[343px] h-[343px] rounded-[12px] mx-auto lg:mx-0"
            />
          </div>

          <div className="w-[343px] h-[473px] lg:w-[576px] lg:h-[480px] manrope flex flex-col lg:justify-between  ">
            <h2 className="text-[#FFFFFF] text-[24px] lg:text-[32px] leading-[110%]">
              Developed an Instagram clone with full functionality, including
              account creation, image uploads, likes, comments, and real-time
              updates.
            </h2>
            <p className="text-[#C7C7C7] text-[16px]  lg:text-[18px]">
              Teamed up with a designer and fellow developers to build a fully
              functional Instagram clone as part of my learning process in
              full-stack development. This project gave me hands on experience
              with user authentication, image uploads, likes, comments, and
              responsive design. Beyond the technical skills, it also
              strengthened my collaboration and problem solving abilities,
              making it a key milestone in my growth as a developer.
            </p>
            <div>
              <p className="text-[16px] text-[#FFFFFF]">Project Info</p>
              <div className="divider" />
              <div className="flex justify-between">
                <p>Year</p>
                <p className="text-[#C7C7C7]">2025</p>
              </div>
              <div className="divider" />
              <div className="flex justify-between">
                <p>Roke</p>
                <p className="text-[#C7C7C7]">Frontend, Backend</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectSection;
