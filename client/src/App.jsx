import useWindowSize from "./hooks/useWindowSize";
import { fetchProjects, fetchData } from "./client";

import ProjectsSection from "./components/ProjectsSection";
import InfoSection from "./components/InfoSection";
import MenuButton from "./components/mobileMenu/Menubutton";
import MobileProjectSection from "./components/mobileMenu/MobileProjectSection";

import { useState, useEffect } from "react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { width } = useWindowSize();
  const [info, setInfo] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetchData("en")
      .then((res) => {
        setProjects(res.projects);
        setInfo(res.info);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    console.log(info);
  }, [info]);
  if (loading) {
    return <h1>Cargando</h1>;
  }

  return (
    <main className="main ">
      <InfoSection />

      <MenuButton setIsMenuOpen={setIsMenuOpen} isModalOpen={isModalOpen} />

      {width > 768 && (
        <ProjectsSection
          projectsArray={projects}
          setIsModalOpen={setIsModalOpen}
        />
      )}

      {width < 768 && (
        <MobileProjectSection
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          projectsArray={projects}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </main>
  );
}

export default App;
