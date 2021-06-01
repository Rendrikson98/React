import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ProductContext from './context/product-contexts';

import './index.css';
import App from './App';


ReactDOM.render(
  <ProductContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProductContext>,
  document.getElementById('root')
);
