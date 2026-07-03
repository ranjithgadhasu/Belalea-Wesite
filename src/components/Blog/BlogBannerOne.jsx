import NaturalImgFour from "../../assets/images/NaturalImgFour.png";

const BlogBannerOne = () => {
  return (
    <section className="bg-white pt-10 pb-24">
      <div className="w-full mx-auto relative">

        <div className="relative">

          {/* Banner */}
        <img
  src={NaturalImgFour}
  alt=""
  className="w-full h-[520px] object-cover"
/>
          {/* Floating Card */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-[-85px] w-[60%] bg-white rounded-[28px] shadow-xl px-14 py-10 mt-[30px]">

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