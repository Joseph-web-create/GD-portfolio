import { Link } from "react-router";
import Header from "../components/Header";
import ProjectSection from "../components/ProjectSection";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="divider mt-10 mb-10" />

      <ProjectSection />
    </>
  );
};

export default HomePage;
