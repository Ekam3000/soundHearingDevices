import React from "react";
import { Stack, StackItem } from "@fluentui/react";
import ItemDetails from "./itemDetails";
//import p1 from "../../images/products/product-1.png";
// Import all images
// import p1 from "../../images/products/product-1.png";
// import p2 from "../../images/products/product-2.png";
// import p3 from "../../images/products/product-3.png";
// import p4 from "../../images/products/product-4.png";
// import p5 from "../../images/products/product-5.png";
// import p6 from "../../images/products/product-6.png";
// import p7 from "../../images/products/product-7.png";
// import p8 from "../../images/products/product-8.png";

// Create an array of the imported images
// const productImages = [p1, p2, p3, p4, p5, p6, p7, p8];

//or

// Create a context to require all images in the directory
const imagesContext = require.context('../../images/products', false, /\.png$/);

// Generate an array of image imports
const productImages = imagesContext.keys().map(imagesContext);


// Function to get a random image from the array
function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * productImages.length);
  return productImages[randomIndex];
}

class ItemCard extends React.Component {
    render() {
      // Get a random image for this item card
      const randomImage = getRandomImage();
    return (
      <Stack
        style={{
          width: "200px",
          backgroundColor: "#fff",
          borderRadius: "10px",
          height:"100%"
        }}
      >
        <StackItem>
          <img
            style={{ borderRadius: "10px 10px 0 0" }}
            height="150px"
            width="200px"
            src={randomImage}
            alt="Cart"
          />
        </StackItem>
        <StackItem>
          <ItemDetails onAddToCart={this.props.onAddToCart} productDetails={this.props.productDetails} />
        </StackItem>
      </Stack>
    );
  }
}

export default ItemCard;
