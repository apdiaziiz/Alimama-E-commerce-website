import React, { useEffect } from 'react'
import Products from './Products';
import { useSelector } from 'react-redux';
import Navbar from './Navbar';
import ShowCase from './ShowCase';
import { Link, useParams } from 'react-router-dom';

const Container = ({jewelery}) => {
    const { data, loading } = useSelector((state) => state.cart)
    const productId = useParams();
    useEffect(() => {

    },[data])
  
    return (
      <>
        <Navbar />
        <ShowCase jewelery={jewelery}/>
        {/* <Link className='link' to={`product/${productId}`}> */}
          <div className='prod-section'>
            <div className="products">
              {loading ? <h3>loading...</h3> : data && data.map(product => (
                <Products key={product.id} {...product} />
              ))}
            </div>
          </div>
        {/* </Link> */}
      </>
        
    )
}

export default Container