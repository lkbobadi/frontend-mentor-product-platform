import React, { useState } from "react";
import "./Products.css";

import product1 from "../src/images/image-product-1.jpg";
import product2 from "../src/images/image-product-2.jpg";
import product3 from "../src/images/image-product-3.jpg";
import product4 from "../src/images/image-product-4.jpg";

export default function ProductGallery() {
  let images = [product1, product2, product3, product4];
  let [selectImage, setSelectImage] = useState(images[0]);

  return (
    <div className='gallery col-6 g-0'>
<<<<<<< HEAD
<<<<<<< HEAD
      <div className='main-image'>
=======
=======
>>>>>>> parent of e8c881e (Mobile Responsive Nav)
      <div className='main-image g-0'>
>>>>>>> parent of e8c881e (Mobile Responsive Nav)
        <img src={selectImage} alt='product shoes' />
      </div>
      <section className='extra-images'>
        {images.map((image, index) => {
          return (
            <div key={index} value={index}>
              <img
                src={image}
                onClick={() => setSelectImage(image)}
                alt={index}
                style={{
                  opacity: selectImage === image ? 0.7 : "",
                }}
              />
            </div>
          );
        })}
      </section>
    </div>
  );
}
