import AboutNaturalImg from "../../assets/images/AboutNaturalImg.png";
import ReturnPurchase from "../../assets/icons/ReturnPurchase.png";
import lefticonimg from "../../assets/icons/lefticonimg.svg"
import PhoneTime from "../../assets/icons/PhoneTime.png";
import { FaRegCircle } from "react-icons/fa";


const features = [
  {
    id: 1,
    title: "100% Натуральные продукты",
    description:
      "Simply dummy text of the printing and typesetting \n industry. Lorem Ipsum.",
  },
  {
    id: 2,
    title: "Сертификаты качества и соответствия",
    description:
      "Filling, and temptingly healthy, our Biona Organic \n Granola with Wild Berries is just the thing.",
  },
];

const cards = [
  {
    id: 1,
    icon: ReturnPurchase,
    title: "Доступность",
    description: "Наша продукция во \n всех гипермаркетах",
  },
  {
    id: 2,
    icon: lefticonimg,
    title: "100% Свежесть",
    description: "Мы - местный производитель",
  },
  {
    id: 3,
    icon: PhoneTime,
    title: "Поддержка",
    description: "Мы всегда готовы \n ответить на все вопросы",
  },
];

const NaturalChoose = () => {
  return (
    <section className="natural-section bg-[#F9F8F8] py-24">
      <div className="natural-container max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="natural-wrapper grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div className="natural-content">
            <p
              className="natural-subtitle text-[#8DBB98] text-5xl mb-3"
              style={{ fontFamily: "Rosa Marena, cursive" }}
            >
              Почему мы ?
            </p>

            <h2 className="natural-title text-[#274C5B] text-4xl lg:text-4xl font-bold leading-tight">
              Мы закупаем семена и
              <br />
              орехи у лучших фермеров.
            </h2>

            <p className="natural-description  text-[#6B6B6B] text-[16px] leading-8 text-lg mt-5">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased <br /> to been the industry's standard the 1500s, when
              an unknown.
            </p>

            {/* Feature List */}
            <div className="natural-features mt-7 space-y-8">
              {features.map((item) => (
                <div key={item.id}>
                  <div className="natural-feature inline-flex items-center gap-3 bg-[#F1F1F1] rounded-full px-6 py-4">
                    <FaRegCircle size={18} className="text-[#8DBB98]" />
                    <span className="text-[#274D5B] font-semibold">
                      {item.title}
                    </span>
                  </div>
                  <p className="natural-feature-text text-[#6B6B6B] whitespace-pre-line leading-7 mt-4 ml-12">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="natural-image">
            <img
              src={AboutNaturalImg}
              alt="Organic"
              className="natural-img rounded-[28px] w-full object-cover shadow-lg"
            />
          </div>
        </div>

       
        {/* Bottom Cards */}
        <div className="natural-cards grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-24">
          {cards.map((card) => (
            <div
              key={card.id}
              className="natural-card bg-white rounded-[24px] py-10 px-8 shadow-sm hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center"
            >
              {/* Icon */}
              <div className="natural-card-icon w-20 h-20 rounded-xl bg-[#F3F3F3] flex items-center justify-center mb-8">
                <img
                  src={card.icon}
                  alt={card.title}
                  className="max-w-[42px] max-h-[42px] object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="natural-card-title text-[#274C5B] text-[28px] font-bold leading-tight mb-4">
                {card.title}
              </h3>

              {/* Description */}
              <p className="natural-card-description text-[#6B6B6B] whitespace-pre-line text-[16px] leading-6">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default NaturalChoose;
