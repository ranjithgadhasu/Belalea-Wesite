import BlogBg from "../../assets/images//BlogBg.png";

const BlogBanner = () => {
  return (
     <section
                 className="blog-banner relative w-full h-[220px] md:h-[280px] lg:h-[320px] bg-cover bg-center bg-no-repeat"
                 style={{
                   backgroundImage: `url(${BlogBg})`,
                 }}
               >
                 {/* Optional white overlay */}
                 <div className="blog-banner-overlay absolute inset-0 bg-white/10"></div>
           
                 {/* Content */}
                 <div className="blog-banner-content relative z-10 flex items-center justify-center h-full">
                   <h1 className="text-[#2F5565] text-4xl md:text-5xl lg:text-6xl font-bold">
                  Новости
                   </h1>
                 </div>
               </section>
  )
}

export default BlogBanner