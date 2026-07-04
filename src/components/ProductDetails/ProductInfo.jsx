import { useState } from "react";
import { useParams } from "react-router-dom";
import МасFlowerTwo from "../../assets/images/МасFlowerTwo.png";

const ProductInfo = () => {
  const products = [
    {
      id: 5,
      image: МасFlowerTwo,
      category: "Мука",
      title: "Мука Рисовая",
      description:
        "Simply dummy text of the printing and typesetting industry.",
      images: [МасFlowerTwo, МасFlowerTwo, МасFlowerTwo, МасFlowerTwo],
    },
  ];
  const { id } = useParams();
  console.log("Route ID:", id);

  const product = products.find((item) => item.id === Number(id));

  const [selectedImage, setSelectedImage] = useState(product?.image);

  if (!product) {
    return (
      <div className="py-32 text-center text-3xl font-bold">
        Product Not Found
      </div>
    );
  }
  return (
    <section className="product-info-section  py-24 bg-white">
      <div className="product-info-container max-w-7xl mx-auto px-6">
        <div className="product-info-wrapper grid lg:grid-cols-2 gap-20 items-start">
          {/* LEFT */}
          <div className="product-info-left">
            <div className="product-image-card relative bg-[#F9F8F8] rounded-[30px] p-8">
              {/* Badge */}

              <span className="product-badge absolute top-20 left-3 bg-[#274C5B] text-white text-xs px-4 py-2 rounded-md">
                {product.category}
              </span>

              {/* Image */}

              <div className="product-main-image bg-white h-[500px] flex justify-center items-center">
                <img
                  src={selectedImage}
                  alt={product.title}
                  className="product-main-img max-h-[420px] object-contain transition duration-300"
                />
              </div>
            </div>

            {/* Thumbnails */}

            <div className="product-thumbnails flex gap-4 mt-6">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  onClick={() => setSelectedImage(product.image)}
                  className="product-thumb cursor-pointer bg-[#F9F8F8] rounded-4xl p-2 border-2 border-transparent hover:border-[#274C5B]"
                >
                  <img
                    src={product.image}
                    alt=""
                    className="product-thumb-img w-20 h-20 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* RIGHT */}
          <div className="product-info-right">
            <h1 className="product-title text-[#274C5B] text-4xl font-bold mb-8">
              {product.title}
            </h1>
            <p className="product-description text-[#6B6B6B] leading-9 text-[17px]">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s,
              <br /> when an unknown printer took a galley.
            </p>

            <p className="product-description text-[#6B6B6B] leading-9 text-[17px]">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s,
              <br /> when an unknown printer took a galley.
            </p>

            {/* Buttons */}

            <div className="product-buttons flex flex-wrap gap-5 mt-16">
              <button className="product-btn-wild bg-gradient-to-r from-[#C01F93] to-[#A5148D] text-white font-semibold px-12 py-5 hover:scale-105 transition">
                Wildberries
              </button>

              <button className="product-btn-ozon bg-gradient-to-r from-[#4338FF] to-[#2010FF] text-white font-semibold px-14 py-5 rounded-xl hover:scale-105 transition">
                OZON
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
