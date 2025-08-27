import AboutMe from "../components/AboutMe";
import Header from "../components/Header";
import ProjectSection from "../components/ProjectSection";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="divider mt-10 mb-10 bg-[#484848] h-[1px]" />

      <ProjectSection />

      <div className="divider mt-10 mb-10 bg-[#484848] h-[1px]" />

      <AboutMe />
    </>
  );
};

export default HomePage;
