import CatalogBgImg  from "../../assets/images/CatalogBgImg.png";

const CatalogBanner = () => {
  return (
    <section
          className="catalog-banner relative w-full h-[220px] md:h-[280px] lg:h-[320px] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${CatalogBgImg})`,
          }}
        >
          {/* Optional white overlay */}
          <div className="catalog-banner-overlay absolute inset-0 bg-white/10"></div>
    
          {/* Content */}
          <div className="catalog-banner-content relative z-10 flex items-center justify-center h-full">
            <h1 className="catalog-banner-title text-[#2F5565] text-4xl md:text-5xl lg:text-6xl font-bold">
             Каталог
            </h1>
          </div>
        </section>
  )
}

export default CatalogBanner