import { motion as m } from "framer-motion";
const ProjectCard = ({ id, setOpenedApp, canOpenApp, setIsModalOpen }) => {
  return (
    <m.div
      onClick={() => {
        if (canOpenApp) {
          setOpenedApp(id);
          // setIsModalOpen(true);
        }
        if (canOpenApp && setIsModalOpen) {
          setOpenedApp(id);
          setIsModalOpen(true);
        }
      }}
      layoutId={id}
      className="w-full h-[400px] bg-cyan-600 my-3"
    ></m.div>
  );
};

export default ProjectCard;
