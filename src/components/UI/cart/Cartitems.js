import React from "react";
import { ListGroupItem } from "reactstrap";

import '../../../style/cart-item.css'
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";

const Cartitems = ({item}) => {
  const {id,title,price,image01,quantity,totalPrice} = item;

  const dispatch = useDispatch()

  const incrementItem = () =>{
    dispatch(cartActions.addItem({
      id,
      title,
      price,
      image01
    }))
  }
  const decreaseItem = () =>{
    dispatch(cartActions.removeItem(id))
  }

  const deleteItem = () =>{
    dispatch(cartActions.deleteItem(id))
  }
  return (
    <ListGroupItem className="border-0 cart-item">
      <div className="cart__item-info d-flex gap-2">
        <img src={image01} alt="product-img" />
        <div className="cart__product-info w-100 gap-4 d-flex align-items-center 
        justify-content-between">
          <div>
            <h6 className="cart__product-title">{title}</h6>
            <p className="cart__product-price d-flex align-items-center gap-5">
            {quantity}x <span>${totalPrice}</span></p>
            <div className="d-flex align-items-center gap-3 increase__decrease-btn">
              <span className="increase-btn"onClick={incrementItem}>
                <i class="ri-add-line"></i></span>
              <span className="quantity">{quantity}</span>
              <span className="decrease-btn" onClick={decreaseItem}>
                <i class="ri-subtract-line"></i></span>
            </div>
          </div>
          <span className="delete-btn" onClick={deleteItem }>
            <i class="ri-close-line"></i>
          </span>
        </div>
      </div>
    </ListGroupItem>
  );
};

export default Cartitems;
