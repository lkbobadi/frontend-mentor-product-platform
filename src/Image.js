import React from "react";

export default function Image(image, index, opacity) {
  return (
    <div key={index}>
      <img src={image} alt={index} style={{ opacity: opacity ? 1 : 0.7 }} />
    </div>
  );
}
