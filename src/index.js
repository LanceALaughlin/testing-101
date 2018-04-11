import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const productData = { name: "Fresh Prince: Season 2", price: 10, available: 8, image: "https://images-na.ssl-images-amazon.com/images/I/91eogM8ci8L._SX342_.jpg"};

ReactDOM.render(<App productData={productData} />, document.getElementById('root'));
registerServiceWorker();
