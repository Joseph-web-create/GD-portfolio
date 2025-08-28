import { Link } from "react-router";
import img from "../assets/profile3.jpeg";

const AboutMe = () => {
  return (
    <div className="mx-auto max-w-[1440px]" id="about">
      <div className="flex flex-col lg:flex-row justify-between pb-60 pt-15 px-4">
        <h2 className="text-[42px] lg:text-[101px] text-[#FFFFFF] bebas-neue-regular">
          About me
        </h2>
        <div className="lg:w-[704px] flex gap-6 flex-col">
          <p className="text-[18px] lg:text-[32px] text-[#FFFFFF] leading-[120%] manrope">
            I am a Full Stack Developer based in Lagos with a background in
            Computer Science.
          </p>

          <p className="text-[#C7C7C7] text-[16px] lg:text-[18px] manrope">
            I specialize in building scalable, accessible, and user-friendly
            solutions using <strong>React</strong> and <strong>Next.js</strong>.
            With a strong foundation in both <strong>Front end</strong> and
            <strong> Back end</strong> development, I aim to create products
            that are not only functional but also deliver seamless user
            experiences. Passionate about problem-solving and continuous
            learning, I’m currently deepening my knowledge of design principles
            to strengthen my ability to bridge development and design. Outside
            of coding, I enjoy football, chess, reading, and playing the drums.
          </p>
          <div>
            <Link
              to={"about-me"}
              className="text-[#D3E97A] text-[16px] manrope "
            >
              More about me
            </Link>

            <div className="divider border border-[#D3E97A] mt-0 h-0 w-[114px] " />
          </div>

          <img
            src={img}
            className="w-[343px] lg:hidden rounded-2xl h-[343px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
