const ContactForm = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-5">

        <form className="space-y-10">

          {/* Row 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            <div>
              <label className="block text-[#274C5B] text-[20px] font-semibold mb-4">
                Как вас зовут?*
              </label>

              <input
                type="text"
                placeholder="Ирина, Денис, Елена"
                className="w-full h-[78px] rounded-[18px] border border-[#7EB693] px-6 text-[#274C5B] text-lg placeholder:text-[#B5B5B5] outline-none focus:border-[#274C5B] transition"
              />
            </div>

            <div>
              <label className="block text-[#274C5B] text-[20px] font-semibold mb-4">
                Ваша почта*
              </label>

              <input
                type="email"
                placeholder="example@yourmail.com"
                className="w-full h-[78px] rounded-[18px] border border-[#7EB693] px-6 text-[#274C5B] text-lg placeholder:text-[#B5B5B5] outline-none focus:border-[#274C5B] transition"
              />
            </div>

          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            <div>
              <label className="block text-[#274C5B] text-[20px] font-semibold mb-4">
                Компания
              </label>

              <input
                type="text"
                placeholder="Название вашей компании"
                className="w-full h-[78px] rounded-[18px] border border-[#7EB693] px-6 text-[#274C5B] text-lg placeholder:text-[#B5B5B5] outline-none focus:border-[#274C5B] transition"
              />
            </div>

            <div>
              <label className="block text-[#274C5B] text-[20px] font-semibold mb-4">
                Тема обращения*
              </label>

              <input
                type="text"
                placeholder="Напишите ваше предложение или вопрос"
                className="w-full h-[78px] rounded-[18px] border border-[#7EB693] px-6 text-[#274C5B] text-lg placeholder:text-[#B5B5B5] outline-none focus:border-[#274C5B] transition"
              />
            </div>

          </div>

          {/* Message */}
          <div>
            <label className="block text-[#274C5B] text-[20px] font-semibold mb-4">
              Сообщение*
            </label>

            <textarea
              rows={8}
              placeholder="Не забудьте поздороваться :)"
              className="w-full rounded-[18px] border border-[#7EB693] px-6 py-4 text-[#274C5B] text-lg placeholder:text-[#B5B5B5] outline-none resize-none focus:border-[#274C5B] transition"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="bg-[#274C5B] hover:bg-[#1E3D49] text-white text-xl font-semibold px-14 py-6 rounded-[18px] transition duration-300"
          >
            Отправить
          </button>

        </form>

      </div>
    </section>
  );
};

export default ContactForm;