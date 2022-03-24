import React, { useState } from "react";
import "./Products.css";

import product1 from "../src/images/image-product-1.jpg";
import product2 from "../src/images/image-product-2.jpg";
import product3 from "../src/images/image-product-3.jpg";
import product4 from "../src/images/image-product-4.jpg";

export default function ProductGallery() {
  let [mainImage, setMainImage] = useState(product1);

  let [opacity, setOpacity] = useState(1);

  let images = [product1, product2, product3, product4];

  function clickImage(e) {
    setMainImage(e.target.src);
    e.target.style.opacity = setOpacity(!opacity);
  }

  return (
    <div className='gallery col-md-6'>
      <img src={mainImage} alt='product shoes' className='main-image' />

      <section className='extra-images'>
        {images.map((image, index) => {
          return (
            <img
              src={image}
              onClick={clickImage}
              key={index}
              alt={index}
              style={{ opacity: opacity ? 1 : 0.5 }}
            />
          );
        })}
      </section>
    </div>
  );
}
