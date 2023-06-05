import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectedProduct } from '../redux-features/Product-action'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { decrease, increase } from '../redux-features/CartSlices'

const SingleProduct = () => {
  const [singleProduct, setSingleProduct] = useState([])
  const { data, amount } = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const { productId } = useParams()

  useEffect(() => {
    const getSingleProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${productId}`)
      const data = await response.json()
      // dispatch(selectedProduct(data))
      setSingleProduct(data)
      console.log(data);
    }
    getSingleProduct()
  }, [])

  const { id, title, price, image, category, description
  } = singleProduct


  return (
    <div className='single-product'>
      <div className="product-items">
        <div className="pic">
          <img src={ image } alt={id} />
        </div>
        <div className="contents">
          <h2 className='category'>{ category }</h2>
          <div className="title">{ title }</div>
          <h2 className='price'>$ { price }</h2>
          <p className='desc'>{ description }</p>
          <div className="btn-flex">
            <FaAngleLeft onClick={() => dispatch(decrease({id}))} />
            <div className="amount">{ amount }</div>
            <FaAngleRight onClick={() => dispatch(increase({id}))} />
            <button className='add-btn'>Add to cart</button>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default SingleProduct