import TractorImg from "../../assets/icons/TractorImg.png";
import ChemicalImg from "../../assets/icons/ChemicalImg.png";

import AboutImgMiddle from "../../assets/images/AboutImgMiddle.png"; 

const AboutOrganic = () => {
  return (
    <section className="about-organic-section bg-white py-24">
      <div className="about-organic-container max-w-7xl mx-auto px-6">

        <div className="about-organic-wrapper grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Image */}
          <div className="about-organic-image flex justify-center">
            <img
              src={AboutImgMiddle}
              alt="Organic Food"
              className="about-organic-img w-full max-w-[560px] object-contain"
            />
          </div>

          {/* Right Content */}
          <div className="about-organic-content">

            {/* Small Heading */}
            <p
              className="about-organic-subtitle text-[#8CB89A] text-5xl mb-2"
              style={{ fontFamily: "Rosa Marena, cursive" }}
            >
              О нас
            </p>
            {/* Main Heading */}
            <h2 className="about-organic-title text-[#274D5B] text-[40px] font-bold leading-tight">
              Натуральные продукты -
              <br />
              здоровое население
            </h2>

            {/* Paragraph */}
            <p className="about-organic-text text-[#6C6C6C] text-md leading-9 mt-5">
              Simply dummy text of the printing and typesetting industry.
              Lorem had ceased <br /> to been the industry's standard dummy text ever
              since the 1500s, when an unknown printer took a galley.
            </p>

            <p className="about-organic-text text-[#6C6C6C] text-md leading-9 mt-4">
              Simply dummy text of the printing and typesetting industry.
              Lorem had ceased <br /> to been the industry's standard dummy text ever
              since the 1500s, when an unknown printer took a galley.
            </p>

            {/* Features */}
            <div className="about-organic-features flex flex-col sm:flex-row gap-10 mt-10">
              {/* Feature 1 */}
              <div className="about-organic-feature flex items-start gap-4">
                <div className="about-organic-icon w-14 h-14 rounded-xl bg-[#F8FAF8] flex items-center justify-center">
                 <img src={TractorImg} alt="" />
                </div>
                <div>
                  <h4 className="about-organic-feature-title text-[#274D5B] text-[23px] leading-05 font-bold leading-8">
                    Современная
                    <br />
                    сельхоз. техника
                  </h4>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="about-organic-feature flex items-start gap-4">

                <div className="about-organic-icon w-14 h-14 rounded-xl bg-[#F8FAF8] flex items-center justify-center">
                <img src={ChemicalImg} alt="" />
                </div>

                <div>
                  <h4 className="about-organic-feature-title text-[#274D5B] text-[23px] leading-05 font-bold leading-8">
                    Выращивание
                    <br />
                    без гормонов
                  </h4>
                </div>

              </div>

            </div>

            {/* Button */}
            <button className="about-organic-btn mt-10 cursor-pointer bg-[#274D5B] hover:bg-[#1F414E] transition-all duration-300 text-white px-9 py-4 rounded-xl flex items-center gap-3 font-semibold shadow-lg">
              Контакты
              <span className="w-6 h-6 rounded-full bg-[#3D6471] flex items-center justify-center text-xs">
                →
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOrganic;