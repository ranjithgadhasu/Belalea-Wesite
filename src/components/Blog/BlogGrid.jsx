import BlogCard from "./BlogCard";

import NaturalImgOne from "../../assets/images/NaturalImgOne.png";
import NaturalImgTwo from "../../assets/images/NaturalImgTwo.png";
import NaturalImgThree from "../../assets/images/NaturalImgThree.png";
import NaturalImgFour from "../../assets/images/NaturalImgFour.png";
import NaturalImgFive from "../../assets/images/NaturalImgFive.png";
import NaturalImgSix from "../../assets/images/NaturalImgSix.png";

const blogs = [
  {
    id: 1,
    image: NaturalImgOne,
    day: "25",
    month: "Nov",
    title: "The Benefits of Vitamin D & How to Get It",
    description:
      "Simply dummy text of the printing and typesetting \n industry. Lorem Ipsum.",
  },
  {
    id: 2,
    image: NaturalImgTwo,
    day: "25",
    month: "Nov",
    title: "The Benefits of Vitamin B & How to Get It",
    description:
      "Simply dummy text of the printing and typesetting\n industry. Lorem Ipsum.",
  },
  {
    id: 3,
    image: NaturalImgThree,
    day: "25",
    month: "Nov",
    title: "Benefits of Vitamin C & How to Get It",
    description:
      "Simply dummy text of the printing and typesetting\n industry. Lorem Ipsum.",
  },
  {
    id: 4,
    image: NaturalImgFour,
    day: "25",
    month: "Nov",
    title: "Research More Organic Foods",
    description:
      "Simply dummy text of the printing and typesetting industry. Lorem Ipsum.",
  },
  {
    id: 5,
    image: NaturalImgFive,
    day: "25",
    month: "Nov",
    title: "Everyday Fresh Fruits",
    description:
      "Simply dummy text of the printing and typesetting industry. Lorem Ipsum.",
  },
  {
    id: 6,
    image: NaturalImgSix,
    day: "25",
    month: "Nov",
    title: "Don't Use Plastic Product! It's Kill Nature",
    description:
      "Simply dummy text of the printing and typesetting industry. Lorem Ipsum.",
  },
];

const BlogGrid = () => {
  return (
    <section className="blog-grid-section bg-white py-20">
      <div className="blog-grid-container max-w-7xl mx-auto px-5">
        <div className="blog-grid-wrapper grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-24">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default BlogGrid;