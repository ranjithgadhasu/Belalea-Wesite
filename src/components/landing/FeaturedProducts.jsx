import GallryBottomImg from "../../assets/images/GallryBottomImg.png";

const features = [
  {
    id: 1,
    title: "Современное сельское хозяйство",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium\n doloremque laudantium. Sed ut perspiciatis.",
  },
  {
    id: 2,
    title: "Технологичный подход в производстве",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium\n doloremque laudantium. Sed ut perspiciatis.",
  },
  {
    id: 3,
    title: "Популяризация натуральных продуктов",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium\n doloremque laudantium. Sed ut perspiciatis.",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="featured-section w-full bg-white overflow-hidden">
      <div className="featured-container max-w-[1920px] ">

        <div className="featured-wrapper relative grid lg:grid-cols-[58%_42%] items-center">

          {/* Left Image */}
          <div className="featured-image-wrapper relative h-[100vh] w-full">
            <img
              src={GallryBottomImg}
              alt=""
              className="featured-image w-full h-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="featured-content relative z-10 bg-white h-[620px] lg:-ml-[140px] rounded-[35px] px-14 py-20 shadow-xl flex flex-col justify-center">

            {/* Small Heading */}
            <p
              className="featured-subtitle text-[#8AB79C] text-[48px] ml-10 mb-0"
              style={{ fontFamily: "Rosa Marena, cursive" }}
            >
              Eco Friendly
            </p>

            {/* Main Heading */}
            <h2 className="featured-title text-[#2D5564] text-[50px] font-bold leading-tight mb-6">
              Создаём здоровое будущее
            </h2>

            {/* Features */}
            <div className="featured-features space-y-5">
              {features.map((item) => (
                <div key={item.id}>
                  <h3 className="featured-feature-title text-[#2D5564] text-[25px] font-bold mb-2">
                    {item.title}
                  </h3>

                  <p className="featured-feature-description whitespace-pre-wrap text-[#7A7A7A] leading-8 text-lg">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default FeaturedProducts;