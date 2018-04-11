import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const productData = { name: "Fresh Prince: Season 2", price: 10, available: 8 };

ReactDOM.render(<App productData={productData} />, document.getElementById('root'));
registerServiceWorker();
