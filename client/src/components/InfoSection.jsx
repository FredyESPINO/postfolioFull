import InfoContainer from "./InfoContainer";
import Navbar from "./Navbar";

const InfoSection = () => {
  return (
    <div className="info">
      <Navbar />
      <InfoContainer>
        <h3 className="font-saira text-[30px]  md:text-[30px]  lg:text-[35px] xl:text-[45px] text-center mb-[50px]">
          Portafolio fron end de Juan Alfredo Espino Holguin
        </h3>

        <h1 className="font-archivo  text-[120px] md:text-[106px] lg:text-[140px] xl:text-[175px] text-center leading-[130px] font-bold ">
          FREDY ESPINO
        </h1>
      </InfoContainer>

      {/* <InfoContainer>
        <div className="w-full h-10 bg-slate-200"></div>
      </InfoContainer>

      <InfoContainer>
        <div className="w-full h-10 bg-slate-200"></div>
      </InfoContainer> */}
    </div>
  );
};

export default InfoSection;
