import ContackBackGround from "../../assets/images/ContackBackGround.jpg";

const ContactBanner = () => {
  return (
    <section
      className="contact-banner relative w-full h-[220px] md:h-[280px] lg:h-[320px] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${ContackBackGround})`,
      }}
    >
      {/* Optional white overlay */}
      <div className="contact-banner-overlay absolute inset-0 bg-white/10"></div>

      {/* Content */}
      <div className="contact-banner-content relative z-10 flex items-center justify-center h-full">
        <h1 className="contact-banner-title text-[#2F5565] text-4xl md:text-5xl lg:text-6xl font-bold">
          Контакты
        </h1>
      </div>
    </section>
  );
};

export default ContactBanner;
