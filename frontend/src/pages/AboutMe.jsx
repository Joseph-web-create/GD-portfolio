import img from "../assets/profile3.jpeg";
import Contact from "../components/Contact";

function AboutMe() {
  const capabilities = [
    {
      title: "HTML",
      lg: "124px",
      sm: "87px",
      icon: "ri-html5-fill",
      color: "#E34F26",
    },
    {
      title: "CSS",
      lg: "114px",
      sm: "78px",
      icon: "ri-css3-fill",
      color: "#1572B6",
    },
    {
      title: "JAVASCRIPT",
      lg: "175px",
      sm: "131px",
      icon: "ri-javascript-fill",
      color: "#F7DF1E",
    },
    {
      title: "React & React Native",
      lg: "220px",
      sm: "165px",
      icon: "ri-reactjs-line",
      color: "#61DAFB",
    },
    {
      title: "Accessibility",
      lg: "197px",
      sm: "151px",
      icon: "ri-accessibility-fill",
      color: "#4CAF50",
    },
    {
      title: "NEXT.js",
      lg: "129px",
      sm: "91px",
      icon: "ri-nextjs-fill",
      color: "#FFFFFF",
    },
    {
      title: "Tailwind Css",
      lg: "192px",
      sm: "146px",
      icon: "ri-tailwind-css-fill",
      color: "#38BDF8",
    },
  ];

  return (
    <div className=" pb-10" id="about">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col lg:flex-row justify-between pt-15 pb-10 px-4">
          <h2 className="text-[42px] lg:text-[101px] text-[#FFFFFF] bebas-neue-regular">
            About me
          </h2>
          <div className="lg:w-[704px] flex gap-6 flex-col">
            <p className="text-[18px] lg:text-[32px] text-[#FFFFFF] leading-[120%] manrope">
              I am a Full Stack Developer based in Lagos with a background in
              Computer Science.
            </p>

            <p className="text-[#C7C7C7] text-[16px] lg:text-[18px] manrope">
              I specialize in building scalable, accessible, and user friendly
              solutions using <strong>React</strong> and{" "}
              <strong>Next.js</strong>. With a strong foundation in both{" "}
              <strong>Front end</strong> and
              <strong> Back end</strong> development, I aim to create products
              that are not only functional but also deliver seamless user
              experiences. Passionate about problem-solving and continuous
              learning, I’m currently deepening my knowledge of design
              principles to strengthen my ability to bridge development and
              design. Outside of coding, I enjoy football, chess, reading, and
              playing the drums.
            </p>
            <div className="flex items-center gap-3 mt-6 md:flex-row">
              <a
                className="flex bg-[#D3E97A]  hover:bg-[#BDD166] w-[163px] lg:w-[187px] gap-6 justify-center items-center h-[48px] lg:h-[54px] rounded-full "
                href="#contact"
              >
                <p className=" text-[#0A0A0A] font-semibold manrope text-[13px] lg:text-[16px]">
                  Contact me
                </p>

                <div className="bg-black lg:h-[16px] lg:w-[16px] h-[40px] w-[40px] rounded-full flex items-center justify-center">
                  <i className="ri-arrow-right-up-line lg:hidden text-white text-2xl"></i>
                </div>
              </a>

              <div className="flex gap-3 items-center lg:flex-row">
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
        </div>
        <div className="lg:w-[1224px] w-full lg:mt-0 lg:max-h-[700px] mx-auto px-4 mt-">
          <img
            src={img}
            alt="My profile Img"
            className="lg:w-[1224px] max-h-[700px] lg:h-[700px] w-full h-[400px] object-cover lg:rounded-2xl rounded-lg mt-5 lg:object-center"
          />
        </div>
      </div>

      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col lg:flex-row justify-between lg:items-start px-4 pt-14">
          <h2 className="text-[42px] lg:text-[76px] text-[#FFFFFF] bebas-neue-regular lg:w-[600px]">
            My Capabilities
          </h2>

          <div className="text-[#C7C7C7] lg:w-[600px] flex flex-col gap-8 manrope">
            <p>
              <strong>Continuous Learning </strong> – I am committed to
              improving my abilities and keeping up with modern tools,
              frameworks, and industry best practices.
            </p>

            <div className="flex flex-wrap gap-4">
              {capabilities.map((items, i) => (
                <div
                  style={{
                    width: window.innerWidth >= 1024 ? items.lg : items.sm,
                  }}
                  className={`h-[56px] flex items-center rounded-full justify-center border border-[#484848]`}
                  key={i}
                >
                  <div className="flex flex-row items-center gap-2">
                    <i
                      className={`${items.icon} text-xl`}
                      style={{ color: items.color }}
                    ></i>{" "}
                    <p className="text-[#FFFFFF]"> {items.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="divider mt-10 mb-10 bg-[#484848] h-[1px]" />

      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col lg:flex-row justify-between lg:items-start px-4 pt-14 lg:py-40">
          <h2 className="text-[42px] lg:text-[76px] text-[#FFFFFF] bebas-neue-regular lg:w-[600px]">
            My Experience
          </h2>
          <div className="flex flex-col gap-20">
            <div className="text-[#C7C7C7] lg:w-[600px] flex flex-col gap-4 manrope">
              <div className="flex justify-between">
                <p className="text-[#FFFFFF]">Freelance Developer</p>
                <p>SEPT 2024 — Present </p>
              </div>
              <p className="manrope text-[16px] lg:text-[18px]">
                Worked on projects from personal portfolios to dynamic web apps,
                delivering responsive and user friendly solutions with React,
                React Native, Next.js, Tailwind CSS, and JavaScript.
                Collaborated with clients to turn ideas into scalable,
                high-performance products.
              </p>
            </div>

            <div className="text-[#C7C7C7] lg:w-[600px] flex flex-col gap-4 manrope">
              <div className="flex justify-between">
                <p className="text-[#FFFFFF]">Internship</p>
                <p>AUG 2025 — SEPT 2025 </p>
              </div>
              <p className="text-[#D3E97A] mt-0">Tech Studio</p>
              <p className="manrope text-[16px] lg:text-[18px]">
                During my full stack development internship at Tech Studio, I
                worked on both front end and back end projects, gaining
                practical experience with technologies such as HTML, CSS,
                JavaScript, React, Node.js, and databases. I contributed to
                building responsive user interfaces, developing APIs, and
                integrating backend services with frontend applications. This
                internship strengthened my problem solving, debugging, and
                collaboration skills, while also exposing me to industry best
                practices in full stack development.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="divider mt-10 mb-10 bg-[#484848] h-[1px]" />
      <Contact />
    </div>
  );
}

export default AboutMe;
