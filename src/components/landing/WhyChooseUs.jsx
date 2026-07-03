import BgSheBackgroundImg from "../../assets/images/BgSheBackgroundImg.png";
import SheImgStar from "../../assets/images/SheImgStar.png";
//import FiveStar from "../../assets/icons/FiveStar.png";
import { FaStar } from "react-icons/fa";

const stats = [
  {
    id: 1,
    number: "100%",
    title: "Органически",
  },
  {
    id: 2,
    number: "15",
    title: "Продуктов\nна рынке",
  },
  {
    id: 3,
    number: "150+",
    title: "Торговыхточек",
  },
  {
    id: 4,
    number: "5+",
    title: "Летна рынке",
  },
];

const WhyChooseUs = () => {
  return (
    <section
      className="why-section relative bg-cover bg-center bg-no-repeat h-[730px] py-24"
      style={{
        backgroundImage: `url(${BgSheBackgroundImg})`,
      }}
    >
      <div className="why-container max-w-[1400px] mx-auto px-6">
        {/* Heading */}

        <div className="why-heading text-center">
          <p
            className="why-subtitle text-[#7EB693] text-[42px] leading-none mt-[-40px]"
            style={{ fontFamily: "Rosa Marena" }}
          >
            Отзывы
          </p>

          <h2 className="why-title mt-2 text-[#274C5B] text-[42px] font-bold leading-[50px]">
            Что говорят наши покупатели?
          </h2>
        </div>

        {/* Customer */}

        <div className="why-review flex flex-col items-center mt-10">
          <img
            src={SheImgStar}
            alt="Customer"
            className="why-avatar w-[90px] h-[90px] rounded-full object-cover shadow-md"
          />

          {/* Stars */}

          {/* Five Stars */}
          <div className="why-stars flex items-center justify-center gap-[2px] mt-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar key={star} className="text-[#FFA858] text-[18px]" />
            ))}
          </div>

          {/* Review */}

          <p className="why-review-text max-w-[760px] mt-4 text-center text-[#525C60] text-[16px] leading-[34px]">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been.
          </p>

          {/* Dots */}

          <div className="why-dots flex items-center gap-2 mt-5">
            <span className="w-[8px] h-[8px] rounded-full bg-[#CFCFCF]"></span>

            <span className="w-[8px] h-[8px] rounded-full bg-[#7EB693]"></span>

            <span className="w-[8px] h-[8px] rounded-full bg-[#CFCFCF]"></span>
          </div>
        </div>

        {/* Divider */}

        <div className="why-divider max-w-[1020px] mx-auto border-t border-[#E5E5E5] mt-10"></div>

        {/* Statistics */}

        <div className="why-stats flex justify-center gap-10 mt-10 flex-wrap">
          {stats.map((item) => (
            <div className="why-stat-item" key={item.id}>
              <div className="why-stat-circle w-[150px] h-[150px] rounded-full border-2 border-[#7EB693] p-[8px]">
                <div className="why-stat-inner w-full h-full rounded-full bg-[#F1F1F1] flex flex-col items-center justify-center">
                  <h3 className="why-stat-number text-[#274C5B] text-[28px] font-bold leading-none">
                    {item.number}
                  </h3>

                  <p className="why-stat-title mt-2 text-[#274C5B] text-[13px] font-semibold text-center whitespace-pre-line leading-6">
                    {item.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
