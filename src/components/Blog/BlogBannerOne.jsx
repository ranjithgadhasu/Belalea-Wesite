import NaturalImgFour from "../../assets/images/NaturalImgFour.png";

const BlogBannerOne = () => {
  return (
    <section className="bg-white pb-36">
      <div className="w-full max-w-[1920px] mx-auto relative">
        <div className="relative">
          {/* Banner */}
          <img
            src={NaturalImgFour}
            alt=""
            className="w-full h-[898px] object-cover object-[center_30%] rounded-[24px]"
          />
          {/* Floating Card */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-[-90px] w-[78%] max-w-[980px] bg-white rounded-[28px] px-14 py-10 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
            <p className="text-[15px] text-[#6B6B6B] mb-5">
              <span className="font-semibold text-[#274C5B]">
                Дата публикации:
              </span>{" "}
              Январь 6, 2024
            </p>

            <h1 className="text-[#274C5B] text-[36px] font-bold leading-tight mb-6">
              Research More Organic Food
            </h1>

            <p className="text-[#6B6B6B] text-[18px] leading-9 max-w-[720px]">
              Established fact that a reader will be distracted by the readable
              content of a page when looking a layout. The point of using Lorem
              Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogBannerOne;
