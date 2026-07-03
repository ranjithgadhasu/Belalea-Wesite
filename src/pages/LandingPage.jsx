import Hero from "../components/landing/Hero";
import PromoCards from "../components/landing/PromoCards";
import AboutSection from "../components/landing/AboutSection";
import ProductShowcase from "../components/landing/ProductShowcase";
import WhyChooseUs from "../components/landing/WhyChooseUs";
import Statistics from "../components/landing/Statistics";
import FeaturedProducts from "../components/landing/FeaturedProducts";
import EcoFriendly from "../components/landing/EcoFriendly";
import Categories from "../components/landing/Categories";
import Images from "../components/home/Images";
//import NewsSection from "../components/landing/NewsSection";
//import Newsletter from "../components/landing/Newsletter";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <PromoCards />
      <AboutSection />
      <ProductShowcase />
      <WhyChooseUs />
      <Statistics />
      <FeaturedProducts />
      <EcoFriendly />
      <Categories />
      <Images />
    </>
  );
};

export default LandingPage;