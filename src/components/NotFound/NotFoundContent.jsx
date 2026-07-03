import { Link } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";

import NotFoundedImg from "../../assets/images/NotFoundedImg.png";


const NotFoundContent = () => {
  return (
    <section
      className="not-found-image relative overflow-hidden bg-cover bg-center bg-no-repeat py-24 lg:py-32"
      style={{
        backgroundImage: `url(${NotFoundedImg})`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}
          <div className="flex justify-center lg:justify-start">
            {/*<img
              src={NotFoundFlower}
              alt="404 Illustration"
              className="w-full max-w-[500px] object-contain"
            />*/}
          </div>

          {/* Right Content */}
          <div className="not-found-content">

            {/* 404 */}
            <h1 className="not-found-number  text-[130px] md:text-[170px] lg:text-[210px] font-extrabold leading-none text-[#274C5B]/20">
              404
            </h1>

            {/* Heading */}
            <h2 className="not-found-title text-[#274C5B] text-4xl md:text-5xl font-bold -mt-5">
              Страница не найдена
            </h2>

            {/* Description */}
            <p className="not-found-description text-[#6B6B6B] mt-4 text-lg leading-8 max-w-md">
              The page you are looking for doesn't exist or has been moved.
            </p>

            {/* Button */}
            <Link
              to="/catalog"
              className="not-found-btn inline-flex items-center gap-3 mt-10 bg-[#274C5B] hover:bg-[#1F3F4E] text-white font-semibold px-8 py-5 rounded-xl transition-all duration-300"
            >
              В каталог
              <FaArrowCircleRight className="not-found-btn-icon text-sm" />
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
};
export default NotFoundContent;