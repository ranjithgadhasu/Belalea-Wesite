import { useNavigate } from "react-router-dom";
import МасFlowerOne from "../../assets/images/МасFlowerOne.png";

import МасFlowerTwo from "../../assets/images/МасFlowerTwo.png";

const products = [
  {
    id: 1,
    image: МасFlowerOne,
    category: "Масла",
    title: "Масло тыквенное, 250мл",
  },
  {
    id: 2,
    image: МасFlowerOne,
    category: "Мука",
    title: "Масло кунжутное, 250мл",
  },
  {
    id: 3,
    image: МасFlowerOne,
    category: "Каши",
    title: "Масло грецкого ореха, 250 мл",
  },
  {
    id: 4,
    image: МасFlowerOne,
    category: "Масла",
    title: "Масло Конопляное, 250мл",
  },

  {
    id: 5,
    image: МасFlowerTwo,
    category: "Масла",
    title: "Масло тыквенное, 250мл",
  },
  {
    id: 6,
    image: МасFlowerTwo,
    category: "Мука",
    title: "Масло кунжутное, 250мл",
  },
  {
    id: 7,
    image: МасFlowerTwo,
    category: "Каши",
    title: "Масло грецкого ореха, 250 мл",
  },
  {
    id: 8,
    image: МасFlowerTwo,
    category: "Масла",
    title: "Масло Конопляное, 250мл",
  },

  {
    id: 9,
    image: МасFlowerOne,
    category: "Масла",
    title: "Масло тыквенное, 250мл",
  },
  {
    id: 10,
    image: МасFlowerOne,
    category: "Мука",
    title: "Масло кунжутное, 250мл",
  },
  {
    id: 11,
    image: МасFlowerOne,
    category: "Каши",
    title: "Масло грецкого ореха, 250 мл",
  },
  {
    id: 12,
    image: МасFlowerOne,
    category: "Масла",
    title: "Масло Конопляное, 250мл",
  },
];

const CatalogProducts = () => {
  const navigate = useNavigate();
  return (
    <section className="catalog-products-section bg-white py-20">
      <div className="catalog-products-container max-w-7xl mx-auto px-5">
        <div className="catalog-products-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {products.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate("/product/5")}
              className="group cursor-pointer rounded-[28px] bg-[#FAFAFA] p-5 transition-all duration-300 hover:shadow-lg"
            >
              {/* Badge */}
              <span className="inline-flex ml-5 rounded-md bg-[#274C5B] px-4 py-1 text-[11px] font-medium text-white">
                {item.category}
              </span>
              {/* Image Box */}
              <div className="mt-2 h-[250px] rounded-2xl bg-white flex items-center justify-center overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[210px] object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Title */}
              <h3 className="mt-5 text-[16px] font-semibold leading-6 text-[#274C5B]">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CatalogProducts;
