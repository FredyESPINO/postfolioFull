import { motion as m } from "framer-motion";

const testUrl = "https://picsum.photos/seed/picsum/900/1000";
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
      initial={{ opacity: 0.1 }}
      animate={{ opacity: 0.7 }}
      whileHover={{ opacity: 1, scale: 1.02 }}
      className="w-full h-[500px] bg-black outline relative "
    >
      <m.img
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        src={testUrl}
        alt="project img"
        className=" h-[400px] w-full"
      />
      <div className="w-full h-[100px] bg-black absolute bottom-0 flex items-center justify-start pl-4">
        <p className="text-white text-[25px] font-bold font-archivo">
          TEST TITLE
        </p>
      </div>
    </m.div>
  );
};

export default ProjectCard;
