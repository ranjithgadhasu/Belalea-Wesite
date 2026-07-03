import PromoCardOne from "../../assets/images/PromoCardOne.png";
import PromoCardTwo from "../../assets/images/PromoCardTwo.png";

const PromoCards = () => {
  return (
    <section className="promo-section bg-[#F9F8F8] py-24">
      <div className="promo-container max-w-7xl mx-auto px-6">

        <div className="promo-wrapper grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Left Card */}
          <div
            className="promo-card promo-card-one relative h-[360px] rounded-[32px] overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: `url(${PromoCardOne})` }}
          >
            <div className="promo-content absolute inset-0 flex flex-col justify-center pl-10">

              <span
                className="promo-subtitle text-[#FFFFFF] font-rosa text-[50px]"
            
              >
                Новинка!
              </span>

              <h2 className="promo-title mt-3 text-white text-[35px] leading-[36px] font-bold">
                Свежайшее
                <br />
                штирийское
                <br />
                масло
              </h2>

            </div>
          </div>

          {/* Right Card */}
          <div
            className="promo-card promo-card-two relative h-[360px] rounded-[32px] overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: `url(${PromoCardTwo})` }}
          >
            <div className="promo-content absolute inset-0 flex flex-col justify-center pl-10">

              <span
                className="promo-subtitle text-[#7EB693] text-[40px] font-rosa "
              >
                Скидка!
              </span>

              <h2 className="promo-title mt-3 text-[#274C5B] text-[35px] leading-[36px] font-bold">
                Скидка 20%
                <br />
                за подписку
              </h2>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default PromoCards;