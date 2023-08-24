import React,{Fragment} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Layout/Navbar';
import Products from './components/Products/Products';


import './App.css';

function App() {
  return (
    <Fragment>
    <Navbar/>
    <Products/>
    </Fragment>
  );
}

export default App;
