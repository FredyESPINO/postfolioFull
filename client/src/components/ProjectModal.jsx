import { motion as m } from "framer-motion";
const testUrl = "https://picsum.photos/seed/picsum/1500/1000";

const ProjectModal = ({ closeApp, openedApp }) => {
  return (
    <m.div
      onClick={() => closeApp()}
      layoutId={openedApp.title}
      className="absolute  w-screen h-screen top-0 bottom-0 right-0 left-0 z-10 bg-red-500 flex items-center justify-center"
    >
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="w-[500px] h-[300px] bg-white"
      >
        {openedApp.title}
      </m.div>
    </m.div>
  );
};

export default ProjectModal;
