import { Link } from "react-router-dom";
import InstaLogo from "../../assets/icons/InstaLogo.png";
import FaceLogo from "../../assets/icons/FaceLogo.png";
import TwitterLogo from "../../assets/icons/TwitterLogo.png";
import ParalLogo from "../../assets/icons/ParaLogo.png";
import NavbarLogoOne from "../../assets/images/NavbarLogoOne.png";

const Footer = () => {

  return (
    <footer className="footer-section bg-[#F9F8F8] pt-24 pb-12">
      <div className="footer-container max-w-7xl mx-auto px-6">
        <div className="footer-wrapper grid grid-cols-3">
          {/* Contact */}
          <div className="footer-contact text-right pr-14 border-r border-[#D9D9D9]">
            <h3 className="footer-heading text-[36px] font-bold text-[#274C5B] mb-10">
              Contact Us
            </h3>

            <div className="space-y-8">
              <div>
                <h4 className="text-[18px] font-bold text-[#525C60]">Email</h4>

                <p className="text-[18px] text-[#525C60] mt-1">
                  needhelp@Organia.com
                </p>
              </div>

              <div>
                <h4 className="text-[18px] font-bold text-[#525C60]">Phone</h4>

                <p className="text-[18px] text-[#525C60] mt-1">666 888 888</p>
              </div>

              <div>
                <h4 className="text-[18px] font-bold text-[#525C60]">
                  Address
                </h4>

                <p className="text-[18px] text-[#525C60] mt-1">
                  88 road, borklyn street, USA
                </p>
              </div>
            </div>
          </div>

          {/* Center */}
          <div className="footer-center px-14 border-r border-[#D9D9D9] flex flex-col items-center">
            <img src={NavbarLogoOne} alt="Belalea" className="footer-logo w-[220px] mb-8" />

            <p className="footer-description ml-[-70px] text-center text-[17px] leading-8 text-[#525C60] w-[420px] mx-auto">
              Следите за новостями и акциями
              <br />в наших социальных сетях, подпишитесь!
            </p>
          <div className="footer-social flex items-center justify-center gap-6 mt-10">

  {/* Instagram */}
  <button className="footer-social-btn w-[72px] h-[72px] cursor-pointer rounded-full bg-[#EFF6F1] flex items-center justify-center transition-all duration-300 hover:bg-[#274C5B]">
    <img
      src={InstaLogo}
      alt="Instagram"
      className="w-12 h-12 object-contain"
    />
  </button>

  {/* Facebook */}
  <button className="w-[72px] h-[72px] cursor-pointer rounded-full bg-[#EFF6F1] flex items-center justify-center transition-all duration-300 hover:bg-[#274C5B]">
    <img
      src={FaceLogo}
      alt="Facebook"
      className="w-12 h-12 object-contain"
    />
  </button>

  {/* Twitter */}
  <button className="w-[72px] h-[72px] cursor-pointer rounded-full bg-[#EFF6F1] flex items-center justify-center transition-all duration-300 hover:bg-[#274C5B]">
    <img
      src={TwitterLogo}
      alt="Twitter"
      className="w-12 h-12"
    />
  </button>

  {/* Pinterest */}
  <button className="w-[72px] h-[72px] cursor-pointer rounded-full bg-[#EFF6F1] flex items-center justify-center transition-all duration-300 hover:bg-[#274C5B]">
    <img
      src={ParalLogo}
      alt="Pinterest"
      className="w-12 h-12"
    />
  </button>

</div>
          </div>

          {/* Utility */}
          <div className="footer-utility pl-14">
            <h3 className="footer-utility-heading text-[36px] font-bold text-[#274C5B] mb-10">
              Utility Pages
            </h3>
            <ul className="footer-links space-y-6 text-[18px] text-[#525C60]">
              <li className="hover:text-[#274C5B] cursor-pointer">
                Style Guide
              </li>
          <li className="hover:text-[#274C5B] cursor-pointer">
    <Link to="/not-found">404 Not Found</Link>
  </li>
              <li className="hover:text-[#274C5B] cursor-pointer">
                Password Protected
              </li>
              <li className="hover:text-[#274C5B] cursor-pointer">Licences</li>

              <li className="hover:text-[#274C5B] cursor-pointer">Changelog</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
