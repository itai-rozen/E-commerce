import './App.css';
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './Pages/Homepage/Homepage';
import Cart from './Pages/Cart/Cart';
import Nav from './components/Nav/Nav'
import ProductsWrapper from './components/ProductsWrapper/ProductsWrapper';
import CommerceApi from './api'

export default class App extends React.Component {
  state = {
    products:{
      instruments:CommerceApi.getInstruments(), clothes:[],
      natureEquipment:[], cars:[]  
      },
  cartProducts: []
}

addToCart = product => {
  // implement a way to increment the amount of the product instead of adding
  // the same object to the cart products array. 
  this.setState({cartProducts: [...this.state.cartProducts,product]})
}
emptyCart = () => {
  this.setState({cartProducts : []})
}

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Nav cartProducts={this.state.cartProducts}/>
          <Routes>
            <Route path="/" element={<Homepage products={this.state.products} />} />
            <Route path="/:category" element={<ProductsWrapper 
                                                        products={this.state.products}
                                                        addToCart={this.addToCart} />} />
            <Route path="/cart" element={<Cart cartProducts={this.state.cartProducts}
                                                emptyCart={this.emptyCart} />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }

}

