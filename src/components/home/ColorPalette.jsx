const colors = [
  { name: "#274C5B", color: "#274C5B" },
  { name: "#7EB693", color: "#7EB693" },
  { name: "#F4D35E", color: "#F4D35E" },
  { name: "#D4D4D4", color: "#D4D4D4" },
  { name: "#F9F8F8", color: "#F9F8F8" },
  { name: "#EFF6F1", color: "#EFF6F1" },
  { name: "#525C60", color: "#525C60" },
];

const ColorPalette = () => {
  return (
    <section className="color-section bg-[#F9F8F8] py-24">
      <div className="color-container max-w-6xl mx-auto px-6">

        <div className="color-wrapper flex items-start gap-28">

          {/* Left Title */}
          <div className="color-title min-w-[120px]">
            <h2 className="color-title text-[40px] font-bold text-[#274C5B]">
              Color
            </h2>
          </div>

          {/* Color Boxes */}
          <div className="color-grid grid grid-cols-4 gap-x-10 gap-y-12">

            {colors.map((item, index) => (
              <div
                key={index}
                className="color-card flex flex-col items-center"
              >
                <div
                  className="color-box cursor-pointer w-28 h-28 rounded-lg shadow-sm border border-gray-100"
                  style={{ backgroundColor: item.color }}
                ></div>

                <p className="color-name mt-3 text-sm font-medium text-[#274C5B]">
                  {item.name}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default ColorPalette;