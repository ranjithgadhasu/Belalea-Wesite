import NaturalOne from "../../assets/images/NaturalOne.png";
import NaturalTwo from "../../assets/images/NaturalTwo.png";
import NaturalThree from "../../assets/images/NaturalThree.jpg";

const categories = [
  {
    id: 1,
    title: "Натуральные масла",
    image: NaturalOne,
  },
  {
    id: 2,
    title: "НОВИНКИ",
    image: NaturalTwo,
  },
  {
    id: 3,
    title: "Полезная мука",
    image: NaturalThree,
  },
];

const EcoFriendly = () => {
  return (
    <section className="eco-section w-full bg-[#F1F8F4] py-24">
      <div className="eco-container max-w-[1450px] mx-auto px-5">
        <div className="eco-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {categories.map((item) => (
            <div
              key={item.id}
              className="eco-card group relative overflow-hidden rounded-[6px] h-[380px] cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={item.image}
                alt={item.title}
                className="eco-image absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="eco-overlay absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-all duration-500"></div>

              {/* Center Button */}
              <div className="eco-content absolute inset-0 flex items-center justify-center">
                <button
                  className="
                    eco-btn
                    bg-white
                    text-[#2F5665]
                    font-semibold
                    text-lg
                    px-10
                    py-5
                    rounded-2xl
                    shadow-xl
                    transition-all
                    duration-300
                    group-hover:-translate-y-2
                    group-hover:shadow-2xl
                  "
                >
                  {item.title}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcoFriendly;