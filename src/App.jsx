import "./App.css";
import Home from "./Home";
import { Provider } from "react-redux"
import React from 'react'
import store from "./Redux/Store";


const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Home />
      </div>
    </Provider>
  )
}

export default App