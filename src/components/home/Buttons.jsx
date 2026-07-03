import Aerrow from "../../assets/icons/Aerrow.png";

const Buttons = () => {
  return (
    <section className="button-section bg-[#F9F8F8] py-24">
      <div className="button-container max-w-7xl mx-auto px-6">

        <div className="button-wrapper grid grid-cols-[180px_1fr] gap-28">

          {/* Left Title */}
          <div className="button-title-wrapper">
            <h2 className="button-title text-[40px] font-bold text-[#274C5B]">
              Button
            </h2>
          </div>
          {/* Buttons */}
          <div className="button-group flex flex-wrap gap-x-10 gap-y-10">

            {/* Primary */}
            <button className="primary-btn cursor-pointer w-[270px] h-[78px] rounded-[18px] bg-[#274C5B] text-white font-bold text-[20px] flex items-center justify-center gap-4 transition duration-300 hover:bg-[#1d3945]">
              Default Button

              <span className="w-8 h-8 rounded-full bg-[#335B6B] flex items-center justify-center">
                <img
                  src={Aerrow}
                  alt="arrow"
                  className="w-4 h-4"
                />
              </span>
            </button>

            {/* Secondary */}
            <button className="secondary-btn cursor-pointer w-[270px] h-[78px] rounded-[18px] bg-[#EFD372] text-[#274C5B] font-bold text-[20px] flex items-center justify-center gap-4 transition duration-300 hover:bg-[#e7cb63]">
              Default Button

              <span className="w-8 h-8 rounded-full bg-[#274C5B] flex items-center justify-center">
                <img
                  src={Aerrow}
                  alt="arrow"
                  className="w-4 h-4"
                />
              </span>
            </button>

            {/* Outline */}
            <button className="outline-btn cursor-pointer w-[270px] h-[78px] rounded-[18px] border border-[#274C5B] bg-transparent text-[#274C5B] font-bold text-[20px] flex items-center justify-center gap-4 transition duration-300 hover:bg-[#274C5B] hover:text-white">
              Default Button

              <span className="w-8 h-8 rounded-full bg-[#274C5B] flex items-center justify-center">
                <img
                  src={Aerrow}
                  alt="arrow"
                  className="w-4 h-4"
                />
              </span>
            </button>

            {/* Pagination */}
            <button className="pagination-btn cursor-pointer w-[270px] h-[78px] rounded-[18px] bg-[#274C5B] text-white font-bold text-[20px] flex items-center justify-center transition duration-300 hover:bg-[#1d3945]">
              Pagination Button
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Buttons;