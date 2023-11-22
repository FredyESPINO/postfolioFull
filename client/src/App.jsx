import useWindowSize from "./hooks/useWindowSize";
import { fetchProjects } from "./client";

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

  useEffect(() => {
    setLoading(true);
    fetchProjects("en")
      .then((res) => setProjects(res))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <h1>Cargando</h1>;
  }

  return (
    <main className="main ">
      <InfoSection />
      <ProjectsSection
        projectsArray={projects}
        setIsModalOpen={setIsModalOpen}
      />
      <MenuButton setIsMenuOpen={setIsMenuOpen} isModalOpen={isModalOpen} />

      {width < 640 && (
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
