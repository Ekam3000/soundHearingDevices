import "./App.css";
import { v4 as uuidv4 } from 'uuid';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Cart from "./components/Cart";
import ItemSection from "./components/itemSection";
import { Stack, StackItem } from "@fluentui/react";
// import products from "./products.json";
import React from "react";
import { getProductsData } from "./API";
import withExtraProp from "./HOC";
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from './actions';



//Here I updated the App component to use the Redux store and added the use of Higher Order Component(HOC).
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      allProducts: []
    };
    this.onAddToCart = this.onAddToCart.bind(this);
    this.onRemoveFromCart = this.onRemoveFromCart.bind(this);
  }

  componentDidMount = () => {
    getProductsData().then((products) => {
      console.log(products);
      if (products) {
        this.setState({
          allProducts: products
        })
      }
    })
  }
  onAddToCart(id, name, desc, price, quantity, color) {
    if (quantity) {
      const newProduct = {
        id: id,
        uuid:uuidv4(),
        name: name,
        desc: desc,
        price: price,
        quantity: quantity,
        color: color
      };
      console.log(` New product : ${newProduct.name}`)
      let selectedItem=this.state.allProducts.find((product) => product.id === id)

      console.log(` selected product : ${selectedItem}`)

      let newlist = this.state.allProducts.filter((product) => product.id !== id)
      newlist= [...newlist,{id:selectedItem.id,
        name: selectedItem.name,
        description: selectedItem.description,
        price: selectedItem.price,
        stock: selectedItem.stock-quantity
      }]
      newlist.sort((a, b) => a.id - b.id);
      // console.log(newlist)
      this.setState(
        (prevState) => (
          {
          products: [...prevState.products, newProduct],
          allProducts:[...newlist]
        }),
        () => {
          console.log(this.state.products);
        }
      );
      console.log(` products in cart: ${this.state.products}`)
    }
  }

  onRemoveFromCart=(id,uuid)=> {
    const Item=this.state.products.find((products) => products.uuid === uuid)
    let selectedItem=this.state.allProducts.find((product) => product.id === id)
    let newlist = this.state.allProducts.filter((product) => product.id !== id)
      newlist= [...newlist,{id:selectedItem.id,
        name: selectedItem.name,
        description: selectedItem.description,
        price: selectedItem.price,
        stock: selectedItem.stock+Item.quantity
      }]
      newlist.sort((a, b) => a.id - b.id);
    const updatedList = this.state.products.filter(
      (products) => (products.uuid!==uuid)
    );
    this.setState({ products: updatedList,
      allProducts:[...newlist]
     });
  }

  render() {
    const EnhancedStackItem = withExtraProp(StackItem);
    return (
      <div className="App">
        <Header />
        <Stack horizontal horizontalAlign="space-between">
          
          <EnhancedStackItem
            grow="4"
            style={{ padding: "36px 0", backgroundColor: "#c2c2c2" }}
          >
            <ItemSection products={this.state.allProducts} onAddToCart={this.onAddToCart} />
          </EnhancedStackItem>
          <EnhancedStackItem grow="2"
            style={{ width: "30%" }}
          >
            <Cart
              products={this.state.products}
              onRemoveFromCart={this.onRemoveFromCart}
            />
          </EnhancedStackItem>
        </Stack>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
});

const mapDispatchToProps = dispatch => ({
  onAddToCart: product => dispatch(addToCart(product)),
  onRemoveFromCart: productId => dispatch(removeFromCart(productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
