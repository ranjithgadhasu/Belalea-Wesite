import BackgroundHeroImg from "../../assets/images/BackgroundHeroImg.png";
import ContentStyling from "../../assets/images/ContentStyling.png";
import AerowIcon from "../../assets/icons/Aerrow.png";

const Hero = () => {
  return (
    <section
      className="hero-section relative h-[700px] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${BackgroundHeroImg})`,
      }}
    >
      <div className="hero-container max-w-7xl mx-auto h-full px-6 flex items-center">

        <div className="hero-content max-w-[520px]">

          {/* Top Text */}
         <img src={ContentStyling} alt="ContentStyling" className="hero-subtitle-img"/>

          {/* Heading */}
          <h1 className="hero-title text-[#274C5B] text-[58px] mt-[-20px] font-bold leading-[65px] mb-10">
            Масла и мука<br />
            из фермерского
            <br />
            сырья
          </h1>

          {/* Button */}
          <button className="hero-btn flex cursor-pointer items-center gap-4 bg-[#F4D35E] hover:bg-[#efcb53] text-[#274C5B] font-bold text-[18px] px-8 h-[70px] rounded-2xl transition">

            В КАТАЛОГ

            <span className="hero-btn-icon w-8 h-8 rounded-full bg-[#274C5B] flex items-center justify-center">
              <img
                src={AerowIcon}
                alt="Arrow"
                className="w-4 h-4"
              />
            </span>

          </button>

        </div>

      </div>
    </section>
  );
};

export default Hero;