import Buttons from "../components/home/Buttons";
import ColorPalette from "../components/home/ColorPalette"
import Hero from "../components/home/Hero";
import Images from "../components/home/Images";
import Typography from "../components/home/Typography";
//import ProductShowcase from "../components/landing/ProductShowcase";
//import Statistics from "../components/landing/Statistics";
//import EcoFriendly from "../components/landing/EcoFriendly";



const Home = () => {
  return (
  <>
  <Hero />
  <ColorPalette />
  <Typography />
  <Buttons />
  <Images />
 
  {/*<Statistics />*/}
  {/*<EcoFriendly/>*/}
  
  </>
  )
}

export default Home