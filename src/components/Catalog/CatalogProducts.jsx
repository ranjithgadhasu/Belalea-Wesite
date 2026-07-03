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
              className="catalog-product-card group bg-[#FAFAFA] rounded-3xl p-4 hover:shadow-xl transition-all duration-300"
            >
              {/* Badge */}
              <span className="catalog-product-badge inline-block bg-[#274C5B] text-white text-[11px] font-medium px-3 py-1 rounded-md mb-4">
                {item.category}
              </span>
              {/* Image */}
              <div className="catalog-product-image bg-[#FAFAFA] cursor-pointer rounded-xl h-[250px] flex items-center justify-center overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="catalog-product-img max-h-[210px] object-contain transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Title */}
              <h3 className="catalog-product-title mt-5 ml-10 text-[#274C5B] text-[15px] font-semibold leading-6">
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