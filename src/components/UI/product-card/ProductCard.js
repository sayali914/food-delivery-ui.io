import React from 'react'
import '../../../style/product-card.css'
import { Link } from 'react-router-dom';
import { cartActions } from '../../../store/shopping-cart/cartSlice';
import { useDispatch } from 'react-redux';

const ProductCard = (props) => {
  const { id,title,image01,price }= props.item;
  const dispatch = useDispatch()

  const addToCart = () =>{
    dispatch(cartActions.addItem({
      id,
      title,
      image01,
      price
    }))
  }
  return (
    <div className='product__item'>
        <div className='product__img'>
            <img src={image01} alt="" className='w-50'/>
        </div>
        <div className='product__content'>
            <h6><Link to={`/foods/${id}`}>{title}</Link></h6>
        </div>
        <div className='d-flex align-items-center justify-content-between'>
            <span className='product__price'>${price}</span>
            <button className='addToCart__btn' onClick={addToCart}>Add To Cart</button>
        </div>
    </div>
  )
}

export default ProductCard