import "./App.css";
import Home from "./Home";
import { Provider } from "react-redux"
import React from 'react'
import store from "./Redux/Store";
import Checkout from "./Checkout";
import { BrowserRouter ,Routes , Route } from 'react-router-dom';


const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>

      </Routes>
        </BrowserRouter>  
         </Provider>
  )
}

export default App