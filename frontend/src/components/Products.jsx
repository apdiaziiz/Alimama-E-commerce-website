import { useState, useEffect } from 'react'
import getAllCategories from '../API/Api_config'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { increase, decrease } from '../redux-features/CartSlices'
import { setProduct } from '../redux-features/Product-action'
import { Link } from 'react-router-dom'

const Products = ({id,title,price,image}) => {
  const { data, amount } = useSelector((state) => state.cart)
  const dispatch = useDispatch();

  return (

            <Link className="product link" to={`product/${id}`}>
             
                <img src={image} alt={id} />
                  <h3 className='title'>
                    {title.length < 15 ? title : title.substring(0,22)} .....
                  </h3>
              

              <div className="content">
                <p className='price'>$ {price}</p>
              </div>

            </Link>  
  )
}

export default Products
