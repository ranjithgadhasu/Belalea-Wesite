import ContactLefImg from "../../assets/images/ContactLefImg.jpg";
import { IoLocationOutline } from "react-icons/io5";

const ContactMap = () => {
  return (
    <section className="contact-map-section bg-white py-24">
      <div className="contact-map-container max-w-7xl mx-auto px-5">

        <div className="contact-map-wrapper relative">

          {/* Background Image */}
          <img
            src={ContactLefImg}
            alt="Map"
            className="contact-map-image w-full h-[620px] object-cover rounded-[34px]"
          />

          {/* Address Card */}
          <div className="contact-map-card absolute top-1/2 right-16 -translate-y-1/2 bg-white w-[470px] rounded-[28px] shadow-2xl px-12 py-10">

            {/* Small Heading */}
            <p
              className="contact-map-subtitle text-[#8DBB98] text-[48px] leading-none"
              style={{ fontFamily: "Rosa Marena, cursive" }}
            >
              Где мы ?
            </p>

            {/* Title */}
            <h2 className="contact-map-title text-[#274C5B] text-[50px] font-bold leading-tight mt-2">
              Наш адрес
            </h2>

            {/* Description */}
            <p className="contact-map-description text-[#6B6B6B] text-[18px] leading-8 mt-4">
              Мы находимся в самом экологически чистом районе Беларуси.
            </p>

            {/* Office */}
            <div className="contact-map-address flex items-start gap-5 mt-5">

              <div className="contact-map-icon w-14 h-14 rounded-full border-2 border-[#7EB693] flex items-center justify-center flex-shrink-0">
                <IoLocationOutline
                  size={28}
                  className="text-[#7EB693]"
                />
              </div>

              <div>
                <h3 className="contact-map-address-title text-[#274C5B] text-[18px] font-bold">
                  Офис:
                </h3>

                <p className="contact-map-address-text text-[#6B6B6B] text-lg mt-1">
                  г.Клецк, ул. Аветисова
                </p>
              </div>

            </div>

            {/* Factory */}
            <div className="flex items-start gap-5 mt-2">

              <div className="w-14 h-14 rounded-full border-2 border-[#7EB693] flex items-center justify-center flex-shrink-0">
                <IoLocationOutline
                  size={28}
                  className="text-[#7EB693]"
                />
              </div>

              <div>
                <h3 className="text-[#274C5B] text-[18px] font-bold">
                  Производство:
                </h3>

                <p className="text-[#6B6B6B] text-lg mt-1">
                  г.Клецк, ул. Нагдаляна
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactMap;