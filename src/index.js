// JSX
import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import configureStore from "./store/configure-store";
import { Provider } from "react-redux";

// JS
// ...

// SCSS
import '../public/assets/scss/main.scss';
import { AppWrapper } from "./App";

const store = configureStore();

ReactDom.render(
    <Provider store={store}>
      {/* <BrowserRouter> */}
        <AppWrapper />
      {/* </BrowserRouter> */}
    </Provider>,
     document.getElementById('root')
    );