// Import your images
import МасFlowerOne  from "../../assets/images/МасFlowerOne.png";


const products = [
  {
    id: 1,
    image: МасFlowerOne,
    title: "Масло тыквенное, 250мл",
    tag: "Масла",
  },
  {
    id: 2,
    image: МасFlowerOne,
    title: "Масло тыквенное, 250мл",
    tag: "Масла",
  },
  {
    id: 3,
    image: МасFlowerOne,
    title: "Масло тыквенное, 250мл",
    tag: "Масла",
  },
  {
    id: 4,
    image: МасFlowerOne,
    title: "Масло тыквенное, 250мл",
    tag: "Масла",
  },
];

const Statistics = () => {
  return (
    <section className="statistics-section w-full bg-[#8CB595] py-24 h-[730px]">
      <div className="statistics-container max-w-7xl mx-auto px-5">

        {/* Header */}
        <div className="tatistics-header flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-14">
          <h2 className="statistics-title text-white text-3xl md:text-5xl font-bold">
            Лучшие предложения месяца
          </h2>

          <button className="statistics-btn bg-[#EFD372] cursor-pointer hover:bg-[#edca56] transition-all duration-300 text-[#274D5B] font-semibold rounded-xl px-7 py-4 flex items-center gap-3 shadow-md">
            Смотреть все

            <span className="w-6 h-6 rounded-full bg-[#274D5B] text-white flex items-center justify-center text-xs">
              →
            </span>
          </button>
        </div>

        {/* Cards */}
        <div className="statistics-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((item) => (
            <div
              key={item.id}
              className="statistics-card relative bg-white rounded-3xl p-4 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Badge */}
              <span className="statistics-badge absolute top-4 left-4 bg-[#274D5B] text-white text-[11px] px-3 py-1 rounded-md">
                {item.tag}
              </span>

              {/* Image */}
              <div className="statistics-image bg-[#F8F8F8] rounded-xl h-[270px] flex items-center justify-center overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="statistics-img w-36 object-contain hover:scale-105 transition duration-300"
                />
              </div>

              {/* Title */}
              <h4 className="tatistics-card-title mt-5 text-[#274D5B] text-lg font-bold leading-6">
                {item.title}
              </h4>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Statistics;