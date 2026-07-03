import SeedImg from "../../assets/images/SeedImg.png";
import SeedLogoOne from "../../assets/images/SeedLogoOne.png";
import SeedLogoTwo from "../../assets/images/SeedLogoTwo.png";
import Aerrow from "../../assets/icons/Aerrow.png";

const AboutSection = () => {
  return (
    <section
      className="about-home-section relative h-[740px] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${SeedImg})`,
      }}
    >
      <div className="about-home-container max-w-[1440px] ml-30 mx-auto h-full px-8 flex justify-end items-center">

        <div className="about-home-content w-[48%]">

          {/* Title */}
          <p
            className="about-home-subtitle text-[#7EB693] text-[38px] leading-none mt-10"
            style={{ fontFamily: "Rosa Marena" }}
          >
            О нас
          </p>

          {/* Heading */}
          <h2 className="about-home-title mt-2 text-[#274C5B] text-[40px] leading-[50px] font-bold">
            Мы работаем только с
            <br />
            качественным сырьём от
            <br />
            местных фермеров
          </h2>

          {/* Paragraph */}
          <p className="about-home-description mt-2 text-[#525C60] text-[17px] leading-[30px]">
            Работа с местными фермерами приносит производственным компаниям
            преимущества в виде высококачественного сырья, укрепляет местное <br/>
            сообщество, снижает экологический след и способствует устойчивости <br />
            цепочки поставок, обеспечивая надежность и прозрачность.
          </p>
          {/* Feature 1 */}
          <div className="about-home-feature flex gap-6 mt-4">

            <div className="about-home-icon w-[80px] h-[80px] rounded-[20px] bg-white flex items-center justify-center shadow">
              <img src={SeedLogoOne} className="w-10" alt="" />
            </div>

            <div>
              <h4 className="about-home-feature-title text-[#274C5B] text-[20px] font-bold">
                Только натуральная продукция
              </h4>

              <p className="about-home-feature-description mt-1 text-[#525C60] leading-5">
                Полагаясь на природу, мы предлагаем продукты
                <br />
                без искусственных добавок, гарантируя вам
                <br />
                чистоту и качество.
              </p>
            </div>

          </div>

          {/* Feature 2 */}
          <div className="about-home-feature flex gap-6 mt-2">

            <div className="about-home-icon w-[80px] h-[80px] rounded-[20px] bg-white flex items-center justify-center shadow">
              <img src={SeedLogoTwo} className="w-10" alt="" />
            </div>

            <div>
              <h4 className="about-home-feature-title text-[#274C5B] text-[20px] font-bold">
                Высокие стандарты качества
              </h4>

              <p className="about-home-feature-description mt-2 text-[#525C60] leading-5">
                На каждом этапе производства мы стремимся к
                <br />
                совершенству, чтобы вы могли наслаждаться
                <br />
                продуктами с превосходным качеством и вкусом.
              </p>
            </div>

          </div>

          {/* Button */}
          <button className="about-home-btn mt-8 cursor-pointer w-[220px] h-[68px] rounded-[16px] bg-[#274C5B] flex items-center justify-center gap-3 text-white font-bold hover:bg-[#1d4658] transition">

            Подробнее

            <span className="w-8 h-8 rounded-full bg-[#335B6B] flex items-center justify-center">
              <img src={Aerrow} className="w-4" alt="" />
            </span>

          </button>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;