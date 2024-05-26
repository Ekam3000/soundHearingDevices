import React from "react";
import { initializeIcons } from "@fluentui/font-icons-mdl2";
import { mergeStyleSets } from "@fluentui/merge-styles";
import p1 from "../../images/products/product-1.png";
import { IconButton, Stack, StackItem, Text } from "@fluentui/react";

initializeIcons();

const styles = mergeStyleSets({
    thumbnail: {
        borderRadius: "8px"
    },
    priceStyle: {
        marginTop: "8px",
        color: "red",
        textAlign: "initial",
    },
    card: {
        width: "100%",
        padding: "8px",
    },
    icon: {
        position: "relative",
        top: "8px",
        right: "8px",
    },
    bold: {
        fontWeight: "bold"
    }
});

class CartCard extends React.Component {
    render() {
        const { thumbnail, priceStyle, card, bold } = styles;

        return (
            <Stack horizontal className={card}>
                <StackItem>
                    <img src={p1}
                        height="56px"
                        width="56px"
                        alt="thumbnail"
                        className={thumbnail}
                    />
                </StackItem>
                <StackItem
                    style={{
                        width: "70%"
                    }}>
                    <div>
                    <Text className={bold}>{this.props.quantity} X </Text>
                        <Text className={bold}>{this.props.name}</Text>
                    </div>
                    <div>
                        <Text>{this.props.desc}</Text>
                    </div>
                    <div>
                        <Text className={bold}>Price   </Text>
                        <Text className={priceStyle}>{parseFloat(this.props.price) * parseFloat(this.props.quantity)}</Text>
                    </div>

                    <div>
                        <Text className={bold}>Color   </Text>
                        <Text className={bold}>{this.props.color}</Text>
                    </div>
                </StackItem>
                <StackItem>
                    <IconButton
                        iconProps={{ iconName: 'Cancel' }}
                        onClick={() => this.props.onRemoveFromCart(this.props.id,this.props.uuid)}
                    />
                </StackItem>
            </Stack>
        )
    }
}

export default CartCard;