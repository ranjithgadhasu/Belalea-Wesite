import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <Link
      to={`/blog/${blog.id}`}
      className="blog-card group block relative"
    >
      {/* Blog Image */}
      <div className="blog-card-image-wrapper overflow-hidden rounded-[30px]">
        <img
          src={blog.image}
          alt={blog.title}
          className="blog-card-image w-full h-[420px] object-cover transition-all duration-500 group-hover:scale-105"
        />
      </div>

      {/* Date Badge */}
      <div className="blog-card-date absolute top-5 left-5 w-[62px] h-[62px] rounded-full bg-white shadow-lg flex flex-col items-center justify-center">
        <span className="text-[#274C5B] text-[20px] font-bold leading-none">
          {blog.day}
        </span>
        <span className="text-[#274C5B] text-[12px] font-semibold uppercase">
          {blog.month}
        </span>
      </div>

      {/* Floating Content */}
      <div className="blog-card-content absolute left-1/2 -translate-x-1/2 bottom-[-28px] w-[86%] bg-white rounded-[28px] shadow-xl px-8 py-7 transition-all duration-300 group-hover:-translate-y-2">

        {/* Title */}
        <h3 className="blog-card-title text-[#274C5B] text-[22px] font-bold leading-8 mb-3">
          {blog.title}
        </h3>
        {/* Description */}
        <p className="blog-card-description text-[#6B6B6B] text-[16px] leading-7 mb-6">
          {blog.description}
        </p>
        {/* Read More */}
        <div className="blog-card-readmore font-bold text-[20px] flex items-center gap-2 text-[#274C5B]">
          Read More
          <FaArrowCircleRight className="text-[#274C5B]" />
        </div>

      </div>
    </Link>
  );
};

export default BlogCard;