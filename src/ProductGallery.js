import React, { useState } from "react";
import "./Products.css";

import product1 from "../src/images/image-product-1.jpg";
import product2 from "../src/images/image-product-2.jpg";
import product3 from "../src/images/image-product-3.jpg";
import product4 from "../src/images/image-product-4.jpg";

export default function ProductGallery() {
  let [mainImage, setMainImage] = useState(product1);

  let [opacity, setOpacity] = useState(1);

  let images = [
    { photo: product1 },
    { photo: product2 },
    { photo: product3 },
    { photo: product4 },
  ];

  function clickImage(e) {
    setOpacity(!opacity);
    setMainImage(e.target.src);
    e.target.style.opacity = 0.7;
  }

  return (
    <div className='gallery col-md-6'>
      <img src={mainImage} alt='product shoes' className='main-image' />

      <section className='extra-images'>
        {images.map((image, index) => {
          return (
            <div key={index}>
              <img
                src={image.photo}
                onClick={clickImage}
                alt={index}
                style={{ opacity: opacity ? index.length + 0.7 : 1 }}
              />
            </div>
          );
        })}
      </section>
    </div>
  );
}
