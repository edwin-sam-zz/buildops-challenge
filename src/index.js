import React from "react";
import ReactDOM from 'react-dom'
import App from './app'
import { BrowserRouter } from "react-router-dom";
import Header from './Components/header'
//import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

//serviceWorker.unregister();
