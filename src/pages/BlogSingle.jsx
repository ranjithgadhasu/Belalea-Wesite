import { useParams } from "react-router-dom";
import BlogBannerOne from "../components/Blog/BlogBannerOne";
import BlogSingleContent from "../components/Blog/BlogSingleContent";
import Images from "../components/home/Images";

const BlogSingle = () => {
  const { id } = useParams();

  return (
    <>
      <BlogBannerOne />
      <BlogSingleContent id={id} />
      <Images />
    </>
  );
};

export default BlogSingle;