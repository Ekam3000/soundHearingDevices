import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Label, Stack, StackItem, Text, mergeStyles, Dialog } from "@fluentui/react";
import cart from "../../images/common/add-to-cart.png";

const priceTextStyles = mergeStyles({
  marginTop: "8px",
  color: "red",
  textAlign: "initial",
});

const marginTop = mergeStyles({
  marginTop: "8px",
});

const textAlign = mergeStyles({
  textAlign: "initial",
});

const stackStyles = {
  root: {
    padding: "8px 16px",
  },
};

function ItemDetails(props) {
  const [quantity, setQuantity] = useState(0);
  const [isCartClicked, setIsCartClicked] = useState(false);
  const [selectedColor, setSelectedColor] = useState(props.productDetails.color || "Black");

  const handleChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleCartClick = () => {
    if (props.productDetails.stock === 0) {
      setIsCartClicked(true);
    } else {
      props.onAddToCart(
        props.productDetails.id,
        props.productDetails.name,
        props.productDetails.description,
        props.productDetails.price,
        quantity,
        selectedColor
      );
    }
  };

  const handleClosePopup = () => {
    setIsCartClicked(false);
  };

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value); // Update selected color
  };

  const getDetails = () => {
    return (
      <>
        <Label className={textAlign}>{props.productDetails.name}</Label>
        <Text className={textAlign}>{props.productDetails.description}</Text>
        <Text className={priceTextStyles} variant="xLarge" block>
          ${(props.productDetails.price * quantity).toPrecision(3)}
        </Text>
      </>
    );
  };

  const getActions = () => {
    // Options for color dropdown
    const colorOptions = ["Black", "Blue", "Green", "Yellow", "Red"];

    
    const renderStockItems = () => {
      const stockItems = [];
      for (let i = 0; i <= props.productDetails.stock; i++) {
        stockItems.push(<option key={i} value={i}>{i}</option>);
      }
      return stockItems;
    }

    return (
      <>
        <Text block> Qty</Text>
        <select
          name="quantity"
          id="product-quantity"
          onChange={handleChange}
          value={quantity}
          disabled={props.productDetails.stock === 0}
        >
          {renderStockItems()}
        </select>

        <div className={marginTop}>
          <select value={selectedColor} onChange={handleColorChange}>
            {colorOptions.map((color, index) => (
              <option key={index} value={color}>
                {color}
              </option>
            ))}
          </select>
        </div>

        <div className={marginTop}>
          <img
            onClick={handleCartClick}
            height="30px"
            src={cart}
            alt="Add to Cart"
            style={{ cursor: props.productDetails.stock === 0 ? 'not-allowed' : 'pointer' }}
          />
        </div>
      </>
    );
  };

  const OutOfStockText = () => {
    if (props.productDetails.stock === 0) {
      return (
        <Text  style={{ color: 'red', marginTop: '8px', marginLeft:40}}>Out of Stock!</Text>
      );
    }
    return null;
  };

  return (
    <Stack>
      <Stack styles={stackStyles} horizontal horizontalAlign="space-between">
      <StackItem>{getDetails()}</StackItem>
      <StackItem>{getActions()}</StackItem>
      
    </Stack>
    <Stack>
    <StackItem>
        <Dialog
          hidden={!isCartClicked}
          onDismiss={handleClosePopup}
          dialogContentProps={{
            type: "normal",
            title: "Out of Stock",
            closeButtonAriaLabel: "Close",
          }}
        >
          <Text variant="mediumPlus" block>
            This item is currently out of stock.
          </Text>
        </Dialog>
        {<OutOfStockText/>}
      </StackItem>
    </Stack>
    </Stack>
    

    
  );
}

export default ItemDetails;
