import Aerrow from "../../assets/icons/Aerrow.png";

import МасFlowerOne from "../../assets/images/МасFlowerOne.png";
import МасFlowerTwo from "../../assets/images/МасFlowerTwo.png";

const products = [
  {
    id: 1,
    category: "Масла",
    image: МасFlowerOne,
    title: "Масло тыквенное, 250мл",
  },
  {
    id: 2,
    category: "Мука",
    image: МасFlowerOne,
    title: "Масло кунжутное, 250мл",
  },
  {
    id: 3,
    category: "Каши",
    image: МасFlowerOne,
    title: "Масло грецкого ореха, 250 мл",
  },
  {
    id: 4,
    category: "Масла",
    image: МасFlowerOne,
    title: "Масло Конопляное, 250мл",
  },
  {
    id: 5,
    category: "Масла",
    image: МасFlowerTwo,
    title: "Мука рисовая",
  },
  {
    id: 6,
    category: "Мука",
    image: МасFlowerTwo,
    title: "Мука рисовая",
  },
  {
    id: 7,
    category: "Каши",
    image: МасFlowerTwo,
    title: "Мука рисовая",
  },
  {
    id: 8,
    category: "Масла",
    image: МасFlowerTwo,
    title: "Мука рисовая",
  },
];

const ProductShowcase = () => {
  return (
    <section className="product-showcase-section bg-[#F9F8F8] py-16">
      <div className="product-showcase-container max-w-[1380px] mx-auto px-6">
        {/* Heading */}
        <div className="product-showcase-heading text-center leading-11">
          <p
            className="product-showcase-subtitle text-[#7EB693] text-[48px]"
            style={{ fontFamily: "Rosa Marena" }}
          >
            Категории
          </p>
          <h2 className="product-showcase-title text-[#274C5B] text-[50px] font-bold">
            Наши продукты
          </h2>
        </div>
        {/* Products */}
        <div className="product-showcase-grid grid grid-cols-4 gap-x-40 gap-y-10 mt-10">
          {products.map((item) => (
            <div
              key={item.id}
              className="product-showcase-card group bg-[#F9F8F8] rounded-[28px] p-6 w-[335px] h-[420px] transition-all duration-300 hover:-translate-y-2 shadow-xl cursor-pointer"
            >
              {/* Badge */}
              <span className="product-showcase-badge ml-2 inline-block bg-[#274C5B] text-white text-[13px] px-4 py-1 rounded-lg">
                {item.category}
              </span>
              {/* Image */}
              <div className="mt-1 product-showcase-image bg-white rounded-xl mt-4 h-[270px] w-full flex items-center justify-center overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="product-showcase-img -mt-1 max-h-[190px] max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Title */}
              <div className="product-showcase-info mt-4 pt-4 border-t border-[#D4D4D4]">
                <h3 className="product-showcase-product-title text-center text-[#274C5B] font-semibold text-[19px] leading-5">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="product-showcase-btn-wrapper flex justify-center mt-20">
          <button className="product-showcase-btn w-[240px] cursor-pointer h-[72px] bg-[#274C5B] rounded-[18px] text-white font-bold text-[18px] flex items-center justify-center gap-4 hover:bg-[#1d4658] transition">
            Смотреть всё
            <span className="w-8 h-8 rounded-full bg-[#335B6B] flex items-center justify-center">
              <img src={Aerrow} alt="" className="w-[19px] h-[19px]" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
