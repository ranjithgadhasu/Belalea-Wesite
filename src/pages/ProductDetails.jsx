import Images from "../components/home/Images"
import ProductBackground from "../components/ProductDetails/ProductBackground"
import ProductInfo from "../components/ProductDetails/ProductInfo"
import RelatedProducts from "../components/ProductDetails/RelatedProducts"

const ProductDetails = () => {
  return (
    <div>
      <ProductBackground />
      <ProductInfo />
      <RelatedProducts />
      <Images />
    </div>
  )
}

export default ProductDetails