import { Link } from "react-router";
import img from "../assets/img1.jpeg"

const AboutMe = () => {
  return (
    <div className="mx-auto max-w-[1440px]" id="about">
      <div className="flex flex-col lg:flex-row justify-between pb-60 pt-15 px-4">
        <h2 className="text-[42px] lg:text-[101px] text-[#FFFFFF] bebas-neue-regular">
          About me
        </h2>
        <div className="lg:w-[704px] flex gap-6 flex-col">
          <p className="text-[18px] lg:text-[32px] text-[#FFFFFF] leading-[120%]">
            I am a Full Stack Developer based in Lagos with a background in
            Computer Science.
          </p>

          <p className="text-[#C7C7C7] text-[16px] lg:text-[18px] manrope">
            I am a Full Stack Developer based in Lagos with a background in
            Computer Science. I focus on accessibility and building scalable,
            user friendly solutions. I work with Next.js and React.js, while
            also expanding my knowledge of design principles. Passionate and
            curious about problem solving, I enjoy football, chess, reading, and
            playing the drums.
          </p>
          <div>
            <Link
              to={"about-me"}
              className="text-[#D3E97A] text-[16px] manrope "
            >
              More about me
            </Link>

            <div className="divider bg-[#D3E97A] w-[114px] mt-0 h-[3px]" />
          </div>

          <img src={img} className="w-[343px] lg:hidden rounded-2xl h-[343px] object-center" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
