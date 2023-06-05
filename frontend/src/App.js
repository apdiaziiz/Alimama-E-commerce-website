import { useEffect, useState } from 'react';
import getAllCategories from './API/Api_config';
import './App.css';
import Navbar from './components/Navbar';
import ShowCase from './components/ShowCase';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from './redux-features/CartSlices';
import Container from './components/Container';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SingleProduct from './components/SingleProduct';
// import axios from 'axios';

function App() {
  const [jewelery, setJewelery] = useState([]);
  const dispatch = useDispatch();
  // const { data } = useSelector((state) => state.cart)

  useEffect(()=> {
    const getProducts = async () => {
      await axios.get(getAllCategories.getMens())
      .then(res => setJewelery(res.data));
    }
    dispatch(getAllProducts())
    getProducts()
  },[])
  // console.log(selector);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Container jewelery={jewelery} />} />
          <Route path='product/:productId' element={<SingleProduct />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
