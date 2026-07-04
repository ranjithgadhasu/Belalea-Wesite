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
    <section className="eco-section w-full bg-[#F1F8F4] py-28">
      <div className="eco-container w-full px-0">
        <div className="eco-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((item) => (
            <div
              key={item.id}
              className="eco-card group relative overflow-hidden rounded-none h-[450px] cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={item.image}
                alt={item.title}
                className="eco-image absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="eco-overlay absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-500"></div>

              {/* Center Button */}
              <div className="eco-content absolute inset-0 flex items-center justify-center">
                <button
                  className="
eco-btn
w-[405px]
h-[96px]
bg-white
rounded-[18px]
text-[#274C5B]
text-[25px]
font-semibold
shadow-lg
transition-all
duration-300
group-hover:scale-105
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
