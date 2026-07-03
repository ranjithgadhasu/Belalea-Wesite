import ContactImgTwo from "../../assets/images/ContactImgTwo.png";
import ContactMessage from "../../assets/images/ContactMessage.png";
import ContactPhone from "../../assets/images/ContactPhone.png";

import {

  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
} from "react-icons/fa";

const ContactInfo = () => {
  return (
    <section className="contact-info-section bg-white py-24">
      <div className="contact-info-containermax-w-7xl mx-auto px-6">

        <div className="contact-info-wrapper grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}
          <div className="contact-info-image-wrapper">
            <img
              src={ContactImgTwo}
              alt="Contact"
              className="contact-info-image w-full rounded-[28px] object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="contact-info-content">

            <h2 className="contact-info-title text-[#274C5B] text-[36px] leading-[40px] font-bold">
              Мы с удовольствием
              <br />
              поговорим о том, как мы
              <br />
              можем работать вместе.
            </h2>
            <p className="contact-info-description text-[#6B6B6B] text-[16px] leading-8 mt-4">
              Simply dummy text of the printing and typesetting industry.
              Lorem had ceased to been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley.
            </p>

            {/* Email Card */}

            <div className="mt-8 space-y-6">

              <div className="flex items-center gap-5 bg-white border border-[#E8E8E8] rounded-2xl px-5 py-4 shadow-sm hover:shadow-lg transition">

                <div className="w-16 h-16 cursor-pointer rounded-xl bg-[#F5F5F5] flex items-center justify-center">
                  <img src={ContactMessage} alt="" />
                </div>

                <div>
                  <h3 className=" text-[#274C5B] text-[25px] font-bold">
                    Сообщение
                  </h3>

                  <p className=" text-[#6B6B6B] text-lg">
                    support@belalea.by
                  </p>
                </div>

              </div>

              {/* Phone Card */}

              <div className="flex items-center gap-5 bg-white border border-[#E8E8E8] rounded-2xl px-5 py-4 shadow-sm hover:shadow-lg transition">

                <div className="w-16 h-16 cursor-pointer rounded-xl bg-[#F5F5F5] flex items-center justify-center">
                  <img src={ContactPhone} alt="" />
                </div>
                <div>
                  <h3 className="text-[#274C5B] text-[25px] font-bold">
                    Звонок
                  </h3>
                  <p className="text-[#6B6B6B] text-lg">
                    +375 (29) 789 789 5
                  </p>
                </div>

              </div>

            </div>

            {/* Social Icons */}

            <div className="bottom-icons flex items-center gap-5 mt-12">

              <a
                href="#"
                className="w-14 h-14 rounded-full bg-[#EFF6F1] flex items-center justify-center hover:bg-[#7EB693] hover:text-white transition"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="#"
                className="w-14 h-14 rounded-full bg-[#EFF6F1] flex items-center justify-center hover:bg-[#7EB693] hover:text-white transition"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="#"
                className="w-14 h-14 rounded-full bg-[#EFF6F1] flex items-center justify-center hover:bg-[#7EB693] hover:text-white transition"
              >
                <FaTwitter size={18} />
              </a>

              <a
                href="#"
                className="contact-social-icon w-14 h-14 rounded-full bg-[#EFF6F1] flex items-center justify-center hover:bg-[#7EB693] hover:text-white transition"
              >
                <FaPinterestP size={18} />
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactInfo;