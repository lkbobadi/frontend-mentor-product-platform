import React, { useState } from "react";
import "./Products.css";
import product1 from "../src/images/image-product-1.jpg";
import productthumb1 from "../src/images/image-product-1-thumbnail.jpg";

import productthumb2 from "../src/images/image-product-2-thumbnail.jpg";
import product2 from "../src/images/image-product-2.jpg";
import productthumb3 from "../src/images/image-product-3-thumbnail.jpg";
import product3 from "../src/images/image-product-3.jpg";
import productthumb4 from "../src/images/image-product-4-thumbnail.jpg";
import product4 from "../src/images/image-product-4.jpg";

export default function ProductGallery() {
  let [mainImage, setMainImage] = useState(product1);

  function changeImage(e) {
    e.preventDefault();
    let mainImage = document.querySelector(".main-image");
    mainImage.target.source = setMainImage(product1);
  }

  function changeImage2(e) {
    e.preventDefault();
    let mainImage = document.querySelector(".main-image");
    mainImage.target.source = setMainImage(product2);
  }

  function changeImage3(e) {
    e.preventDefault();
    let mainImage = document.querySelector(".main-image");
    mainImage.target.source = setMainImage(product3);
  }

  function changeImage4(e) {
    e.preventDefault();
    let mainImage = document.querySelector(".main-image");
    mainImage.target.source = setMainImage(product4);
  }

  return (
    <div className='gallery col-md-6'>
      <img src={mainImage} alt='product shoes' className='main-image' />

      <section className='extra-images'>
        <img src={productthumb1} alt='thumbnail 1' onClick={changeImage} />
        <img src={productthumb2} alt='thumbnail 2' onClick={changeImage2} />
        <img src={productthumb3} alt='thumbnail 3' onClick={changeImage3} />
        <img src={productthumb4} alt='thumbnail 4' onClick={changeImage4} />
      </section>
    </div>
  );
}
