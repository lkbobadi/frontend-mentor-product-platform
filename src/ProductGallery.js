import "./Products.css";
import product1 from "../src/images/image-product-1.jpg";
import product1thumb from "../src/images/image-product-1-thumbnail.jpg";
import product2thumb from "../src/images/image-product-2-thumbnail.jpg";
import product3thumb from "../src/images/image-product-3-thumbnail.jpg";
import product4thumb from "../src/images/image-product-4-thumbnail.jpg";

export default function ProductGallery() {
  return (
    <div className='gallery col-md-6'>
      <img src={product1} alt='product shoes' />
      <section className='extra-images'>
        <img src={product1thumb} alt='thumbnail 1' />
        <img src={product2thumb} alt='thumbnail 2' />
        <img src={product3thumb} alt='thumbnail 3' />
        <img src={product4thumb} alt='thumbnail 4' />
      </section>
    </div>
  );
}
