const textStyles = [
  {
    title: "Display H1 Text",
    className: "text-[72px] font-bold leading-none",
  },
  {
    title: "Heading H2 Text",
    className: "text-[52px] font-bold leading-tight",
  },
  {
    title: "Heading H3 Text",
    className: "text-[40px] font-bold leading-tight",
  },
  {
    title: "Heading H4 Text",
    className: "text-[32px] font-bold leading-tight",
  },
  {
    title: "Heading H5 Text",
    className: "text-[24px] font-bold leading-tight",
  },
  {
    title: "Heading H6 Text",
    className: "text-[20px] font-semibold leading-tight",
  },
];
const listItems = [
  "Publishing packages and web pageLorem Ipsum as their default",
  "Content here, content here', making it look like readable",
  "Packages and web pageLorem Ipsum as their default",
];



const Typography = () => {
  return (
    <>
     <section className="typography-section bg-[#F9F8F8] py-24">
      <div className="typography-container max-w-6xl mx-auto px-6">

        <div className="typography-wrapper grid grid-cols-[180px_1fr] gap-28">

          {/* Left Side */}
          <div className="typography-left">
            <h2 className="typography-heading flex text-[36px] font-bold text-[#274C5B]">
              Text Styles
            </h2>
          </div>

          {/* Right Side */}
          <div className="typography-right space-y-16">

            {textStyles.map((item, index) => (
              <div key={index}>
                <h2
                  className={`typography-text ${item.className} text-[#274C5B]`}
                >
                  {item.title}
                </h2>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
     <section className="content-section bg-[#F9F8F8] py-15">
      <div className="content-container max-w-6xl mx-auto px-6">

        {/* Paragraph */}
        <div className="paragraph-wrapper grid grid-cols-[160px_1fr] gap-24 mb-23">
          <h2 className="section-title text-[40px] font-bold text-[#274C5B]">
            Paragraph
          </h2>

          <p className="paragraph-text w-[950px] text-[18px] leading-[34px] text-[#525C60]">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.established fact that
            a reader will be distracted by the readable content of a page when
            looking at its layout. The point of using Lorem Ipsum is that it has
            a more-or-less normal distribution of letters, as opposed.
          </p>
        </div>

        {/* List */}
        <div className="list-wrapper grid grid-cols-[160px_1fr] gap-24 mb-25">
          <h2 className="section-title text-[40px] font-bold text-[#274C5B]">
            List
          </h2>
          <ol className="list-content max-w-[720px] list-decimal pl-5 space-y-3 text-[18px] leading-[34px] text-[#525C60]">
            {listItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </div>
        {/* Quotes */}
        <div className="quote-wrapper grid grid-cols-[160px_1fr] gap-24">
          <h2 className="section-title text-[40px] font-bold text-[#274C5B]">
            Quotes
          </h2>
          <div className="quote-box max-w-[860px] bg-[#EFEAE6] rounded-[32px] py-14 px-12">
            <p className="quote-text text-center text-[#274C5B] text-[22px] leading-[40px] font-bold">
              “The first rule of any organic used in a business is that nature
              applied to an efficient operation will magnify the efficiency.
              The second is that organic applied to an inefficient operation
              will magnify the health.”
            </p>
          </div>
        </div>

      </div>
    </section>
    </>
  )
}

export default Typography