import { Routes, Route } from "react-router-dom";
import Layout from "../components/common/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import LandingPage from "../pages/LandingPage";
import Catalog from "../pages/Catalog";
import ProductDetails from "../pages/ProductDetails";
import Blog from "../pages/Blog";
import BlogSingle from "../pages/BlogSingle";
import NotFound from "../pages/NotFound";


const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/blog" element={<Blog/>} />
         <Route path="/blog/:id" element={<BlogSingle />} />
         <Route path="/not-found" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
export default AppRoutes;