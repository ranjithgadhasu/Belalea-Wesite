import AboutBannerImg  from "../../assets/images/AboutBannerImg.png"; // Your banner image

const AboutBanner = () => {
  return (
    <section
      className="about-banner relative w-full h-[220px] md:h-[280px] lg:h-[320px] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${AboutBannerImg})`,
      }}
    >
      {/* Optional white overlay */}
      <div className="about-banner-overlay absolute inset-0 bg-white/10"></div>

      {/* Content */}
      <div className="about-banner-content relative z-10 flex items-center justify-center h-full">
        <h1 className="about-banner-title text-[#2F5565] text-4xl md:text-5xl lg:text-6xl font-bold">
          О нас
        </h1>
      </div>
    </section>
  );
};

export default AboutBanner;