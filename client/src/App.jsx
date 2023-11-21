import useWindowSize from "./hooks/useWindowSize";

import ProjectsSection from "./components/ProjectsSection";
import InfoSection from "./components/InfoSection";
import MenuButton from "./components/mobileMenu/Menubutton";
import MobileProjectSection from "./components/mobileMenu/MobileProjectSection";

import { useState } from "react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [projects, setProjects] = useState([1, 2, 3, 4]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { width } = useWindowSize();

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
