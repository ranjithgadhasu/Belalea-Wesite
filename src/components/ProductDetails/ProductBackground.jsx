import ProductDetailsBgImg from "../../assets/images/ProductDetailsBgImg.png";

const ProductBackground = () => {
  return (
        <section
              className="product-banner relative w-full h-[220px] md:h-[280px] lg:h-[320px] bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${ProductDetailsBgImg})`,
              }}
            >
              {/* Optional white overlay */}
              <div className="product-banner-overlay absolute inset-0 bg-white/10"></div>
              {/* Content */}
              <div className="product-banner-content relative z-10 flex items-center justify-center h-full">
                <h1 className="product-banner-title text-[#2F5565] text-4xl md:text-5xl lg:text-6xl font-bold">
                 Мука
                </h1>
              </div>
            </section>
  )
}
export default ProductBackground