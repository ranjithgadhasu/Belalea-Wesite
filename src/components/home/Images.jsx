import BackgroundBottom from "../../assets/images/BackgroundBottom.png"; // Your background image

const Images = () => {
  return (
    <section className="newsletter-section bg-[#F9F8F8] py-24">
      <div className="newsletter-container max-w-7xl mx-auto px-6">
        <div
          className="newsletter-banner relative overflow-hidden rounded-[30px] h-[320px] bg-cover bg-center"
          style={{
            backgroundImage: `url(${BackgroundBottom})`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/5" />

          {/* Content */}
          <div className="newsletter-content relative z-10 h-full flex items-center justify-between px-16">

            {/* Left */}
            <div className="newsletter-text max-w-[430px]">
              <h2 className="newsletter-title text-white text-[36px] mt-[-20px] leading-[60px] font-bold">
               Узнайте первыми <br />
о новых акциях!
              </h2>
            </div>

            {/* Right */}
            <form className="newsletter-form flex items-center gap-4">

              <input
                type="email"
                placeholder="Введите ваш e-mail адрес"
                className="newsletter-input
                  w-[320px]
                  h-[75px]
                  rounded-[18px]
                  bg-white
                  px-8
                  text-[18px]
                  cursor-pointer
                  italic
                  text-[#525C60]
                  outline-none
                "
              />

              <button
                className="newsletter-btn
                  w-[220px]
                  h-[75px]
                  rounded-[18px]
                  bg-[#7EB693]
                  text-white
                  text-[20px]
                  mr-[-30px]
                  font-bold
                  transition
                  cursor-pointer
                  hover:bg-[#6ca783]
                "
              >
                Подписаться
              </button>

            </form>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Images;