import NaturalImgOne from "../../assets/images/NaturalImgOne.png";
import NaturalImgTwo from "../../assets/images/NaturalImgTwo.png";

const blogs = [
  {
    id: 1,
    image: NaturalImgOne,
    day: "25",
    month: "Авг.",
    title: "Витаминная заправка для летнего салата",
    description:
      "Simply dummy text of the printing and typesetting\n industry. Lorem Ipsum",
  },
  {
    id: 2,
    image: NaturalImgTwo,
    day: "25",
    month: "Окт.",
    title: "Каких витаминов не хватает осенью?",
    description:
      "Simply dummy text of the printing and typesetting\n industry. Lorem Ipsum",
  },
];

const Categories = () => {
  return (
    <section className="news-section bg-white py-24 h-[730px]">
      <div className="news-container max-w-7xl mx-auto px-5">

        {/* Header */}
        <div className="news-header flex flex-col lg:flex-row justify-between lg:items-end gap-8 mb-16">
          <div>
            <p
              className="news-subtitle text-[#8BB997] text-5xl mt-[-50px]"
              style={{ fontFamily: "Rosa Marena, cursive" }}
            >
              Новости
            </p>
            <h2 className="news-title text-[#2F5565] text-3xl md:text-4xl font-bold leading-tight max-w-3xl">
              Новости об органических
              <br />
              продуктах и многом другом
            </h2>
          </div>

          <button className="news-btn border border-[#2F5565] rounded-2xl px-8 py-5 text-[#2F5565] font-semibold flex items-center gap-3 hover:bg-[#2F5565] hover:text-white duration-300">
            Больше новостей

            <span className="w-6 h-6 rounded-full bg-[#2F5565] text-white flex items-center justify-center text-xs">
              →
            </span>
          </button>

        </div>

        {/* Cards */}
        <div className="news-grid grid lg:grid-cols-2 gap-10">

          {blogs.map((item) => (
            <div
              key={item.id}
              className="news-card relative group"
            >

              {/* Image */}
              <div className="news-image-wrapper overflow-hidden rounded-[35px] h-[400px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="news-image w-full h-full object-cover duration-500 group-hover:scale-110"
                />
              </div>
              {/* Date */}
              <div className="news-date absolute top-8 left-8 w-20 h-20 rounded-full bg-white shadow-lg flex flex-col justify-center items-center">
                <span className="font-bold text-[#2F5565] text-2xl">
                  {item.day}
                </span>
                <span className="text-[#2F5565] font-semibold text-sm">
                  {item.month}
                </span>
              </div>

              {/* Content */}
              <div className="news-content absolute left-1/2 -translate-x-1/2 bottom-[-40px] w-[88%] bg-white rounded-[30px] shadow-2xl p-4">

                <h3 className="news-card-title text-[#2F5565] text-[20px] ml-10 font-bold mb-3 leading-snug">
                  {item.title}
                </h3>

                <p className="news-description text-gray-500 text-[14px] ml-10 leading-8 mb-4 whitespace-pre-line">
                  {item.description}
                </p>

                <button className="news-card-btn bg-[#F4D35E] hover:bg-[#EAC94D] duration-300 px-6 py-3 ml-10 rounded-2xl text-[#2F5565] font-semibold flex items-center gap-3">
                  Подробнее
                  <span className="w-5 h-5 rounded-full bg-[#2F5565] text-white flex items-center justify-center text-[10px]">
                    →
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;