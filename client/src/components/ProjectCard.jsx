import { motion as m } from "framer-motion";
const ProjectCard = ({ setOpenedApp, canOpenApp, setIsModalOpen, project }) => {
  return (
    <m.div
      onClick={() => {
        if (canOpenApp) {
          setOpenedApp(project);
          // setIsModalOpen(true);
        }
        if (canOpenApp && setIsModalOpen) {
          setOpenedApp(project);
          setIsModalOpen(true);
        }
      }}
      layoutId={project.title}
      className="w-full h-[400px] bg-cyan-600 my-3"
    ></m.div>
  );
};

export default ProjectCard;
