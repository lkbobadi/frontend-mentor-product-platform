import React, { useState } from "react";
import "./Products.css";
import productthumb1 from "../src/images/image-product-1-thumbnail.jpg";
import productthumb2 from "../src/images/image-product-2-thumbnail.jpg";
import productthumb3 from "../src/images/image-product-3-thumbnail.jpg";
import productthumb4 from "../src/images/image-product-4-thumbnail.jpg";
import product1 from "../src/images/image-product-1.jpg";
import product2 from "../src/images/image-product-2.jpg";
import product3 from "../src/images/image-product-3.jpg";
import product4 from "../src/images/image-product-4.jpg";

export default function ProductGallery() {
  let [mainImage, setMainImage] = useState(product1);

  const images = [
    { thumb: productthumb1, full: product1 },
    { thumb: productthumb2, full: product2 },
    { thumb: productthumb3, full: product3 },
    { thumb: productthumb4, full: product4 },
  ];

  function changeImage(e) {
    e.preventDefault();
    let mainImage = document.querySelector(".main-image");
    e.target.src.replace(e.target.value);
    mainImage.target.src = setMainImage(e.target.src);
    console.log(e.target.src);
  }

  function imageSwitch(e) {
    e.preventDefault();
  }

  return (
    <div className='gallery col-md-6'>
      <img
        src={mainImage}
        alt='product shoes'
        className='main-image'
        onChange={imageSwitch}
      />

      <section className='extra-images'>
        {images.map((image, index) => {
          return (
            <img
              src={image.thumb}
              value={image.full}
              onClick={changeImage}
              key={index}
              alt={index}
            />
          );
        })}
      </section>
    </div>
  );
}
