import { Link } from "react-router-dom";

import МасFlowerOne from "../../assets/images/МасFlowerOne.png";

const relatedProducts = [
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
];

const RelatedProducts = () => {
  return (
    <section className="related-products-section py-15 bg-white">
      <div className="related-products-container max-w-7xl mx-auto px-5">

        {/* Heading */}

        <h2 className="related-products-title text-center text-[#274C5B] text-4xl font-bold mb-16">
          Похожие продукты
        </h2>

        {/* Products */}

        <div className="related-products-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {relatedProducts.map((item) => (
            <Link
              key={item.id}
              to={`/product/${item.id}`}
              className="related-product-card group bg-[#F9F8F8] rounded-[28px] p-4 hover:shadow-xl transition-all duration-300"
            >
              {/* Category */}
              <span className="related-product-category ml-4 inline-block bg-[#274C5B] text-white text-[12px] px-3 py-1 rounded-md mb-2">
                {item.category}
              </span>
              {/* Product Image */}
              <div className="related-product-image-wrapper bg-white h-[280px] flex items-center justify-center overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="related-product-image max-h-[240px] object-contain transition-all duration-500 group-hover:scale-105"
                />
              </div>
              {/* Product Title */}
              <h3 className="related-product-name mt-5 ml-5 text-[#274C5B] text-[16px] font-semibold leading-7">
                {item.title}
              </h3>

            </Link>
          ))}

        </div>

      </div>
    </section>
  );
};

export default RelatedProducts;