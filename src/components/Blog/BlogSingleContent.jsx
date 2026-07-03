const BlogSingleContent = () => {
  const bullets = [
    "Publishing packages and web pageLorem Ipsum as their default",
    "Content here, content here', making it look like readable",
    "Packages and web pageLorem Ipsum as their default",
  ];

  const steps = [
    "Publishing packages and web pageLorem Ipsum as their default",
    "Content here, content here', making it look like readable",
    "Packages and web pageLorem Ipsum as their default",
    "More-or-less normal distribution of letters",
  ];

  return (
    <section className="w-full max-w-[790px] mx-auto py-16">

      {/* Intro */}
      <p className="text-[16px] leading-[32px] text-[#525C60] mb-12">
        Uniquely matrix economically sound value through cooperative technology.
        Competently parallel task fully <br /> researched data and enterprise process
        improvements. Collaboratively expedite quality manufactured <br /> products via
        client-focused results quickly communicate enabled technology and
        turnkey leadership skills <br /> Uniquely enable accurate supply chains rather
        than friction technology.
      </p>

      {/* Heading */}
      <h2 className="text-[36px] font-extrabold text-[#274C5B] mb-6 leading-tight">
        Preferred Form of Vitamin D?
      </h2>

      {/* Paragraph */}
      <p className="text-[15px] leading-[30px] text-[#525C60] mb-10">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking <br /> at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to <br /> using "Content here, content here", making it
        look like readable English.
      </p>

      {/* Bullet List */}
      <ul className="space-y-4 mb-10">
        {bullets.map((item, index) => (
          <li key={index} className="flex items-start gap-4">
            <span className="mt-[10px] w-[6px] h-[6px] rounded-full bg-[#525C60]" />
            <span className="text-[18px] leading-[22px] text-[#274C5B]">
              {item}
            </span>
          </li>
        ))}
      </ul>

      {/* Quote Box */}
      <div className="bg-[#F6F3EF] rounded-[30px] px-16 py-14 text-center mb-20">
        <p className="max-w-[720px] mx-auto text-[#274C5B] text-[20px] leading-[40px] font-bold italic">
         “The first rule of any organic used in a business is that nature applied to an efficient operation will magnify the efficiency. The second is that organic applied to an inefficient operation will magnify the health.”
        </p>
      </div>

      {/* Second Heading */}
      <h2 className="text-[36px] font-extrabold text-[#274C5B] mb-6 leading-tight">
        Make perfect organic product with us
      </h2>

      {/* Paragraph */}
      <p className="text-[15px] leading-[32px] text-[#525C60] mb-10">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking <br /> a its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to <br />
         using "Content here, content here", making it
        look like readable English.
      </p>

      {/* Numbered Items */}
      <div className="space-y-4">
        {steps.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 rounded-[20px] px-8"
          >
            <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center font-bold text-[#274C5B] shadow-sm">
              {index + 1}
            </div>

            <p className="text-[18px] leading-[30px] text-[#525C60]">
              {item}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default BlogSingleContent;