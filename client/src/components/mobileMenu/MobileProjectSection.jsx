import { useState, useEffect } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import {
  motion as m,
  AnimateSharedLayout,
  AnimatePresence,
} from "framer-motion";

import ProjectCard from "../ProjectCard";
import ProjectModal from "../ProjectModal";

const MobileProjectSection = ({
  isMenuOpen,
  setIsModalOpen,
  setIsMenuOpen,
  projectsArray,
}) => {
  const [canOpenApp, setCanOpenApp] = useState(true);
  const [openedApp, setOpenedApp] = useState(null);
  const [projects, setProjects] = useState(projectsArray);
  const { width } = useWindowSize();

  const closeApp = () => {
    setOpenedApp(null);
    setCanOpenApp(false);
    setIsModalOpen(false);
    setTimeout(() => {
      setCanOpenApp(true);
    }, 500);
  };

  return (
    <div
      className={`  ${
        isMenuOpen ? "top-0" : "top-[100%]"
      }  left-0 right-0 z-10 bottom-0 absolute delay-150 ease-in-out duration-300 md:hidden  transition-all bg-black `}
    >
      <m.div className="h-screen bg-blue-700 no-scrollbar w-full  overflow-scroll">
        {projects.map((box) => (
          <ProjectCard
            key={box}
            id={box}
            canOpenApp={canOpenApp}
            setOpenedApp={setOpenedApp}
            setIsModalOpen={setIsModalOpen}
          />
        ))}

        <AnimatePresence>
          {openedApp && (
            <ProjectModal closeApp={closeApp} openedApp={openedApp} />
          )}
        </AnimatePresence>
      </m.div>
    </div>
  );
};

export default MobileProjectSection;
