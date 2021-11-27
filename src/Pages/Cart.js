import React, {useEffect,useState} from 'react';
import '../cart/cart.css';
import $ from 'jquery';
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, clearCart, countTotalPrice, decreaseCartQuantity, removeFromCart } from '../cart/cartSlice';


function Cart(props) {
    $(document).ready(function(){
        $(this).scrollTop(0);
    });
        const cart = useSelector((state)=> state.cart)
        const dispatch = useDispatch()
        useEffect(()=>{
            dispatch(countTotalPrice())
        },[cart,dispatch])

        function handleRemove(item){
            dispatch(removeFromCart(item))
        }

        function handleDecrease(item){
            dispatch(decreaseCartQuantity(item))
        }
        function handleIncrease(item){
            dispatch(addToCart(item))
        }

        function handleClear(){
            dispatch(clearCart())
        }

        return (
            <div>
                 {cart.cartItems.length===0 ? 
                 
                 (<div>
                     <div className="px-4 px-lg-0">


<div className="pb-5">
  <div className="container">
    <div className="row">
      <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">

 
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="border-0 bg-light">
                  <div className="p-2 px-3 text-uppercase">Your cart is empty!</div>
                </th>
                
              </tr>
              <Link to ='/' ><button  className="py-2 text-uppercase continue">Go Shopping</button></Link>
            </thead>
            
          </table>
        </div>
        
      </div>
    </div>

    <div className="row py-5 p-4 bg-white rounded shadow-sm">
      <div className="col-lg-6">
        <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Coupon code</div>
        <div className="p-4">
          <p className="font-italic mb-4">If you have a coupon code, please enter it in the box below</p>
          <div className="input-group mb-4 border rounded-pill p-2">
            <input type="text" placeholder="Apply coupon" aria-describedby="button-addon3" className="form-control border-0"/>
            <div className="input-group-append border-0">
              <button id="button-addon3" type="button" className="btn btn-dark px-4 rounded-pill"><i className="fa fa-gift mr-2"></i>Apply coupon</button>
            </div>
          </div>
        </div>
        <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Instructions for seller</div>
        <div className="p-4">
          <p className="font-italic mb-4">If you have some information for the seller you can leave them in the box below</p>
          <textarea name="" cols="30" rows="2" className="form-control"></textarea>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Order summary </div>
        <div className="p-4">
          <p className="font-italic mb-4">Shipping and additional costs are calculated based on values you have entered.</p>
          <ul className="list-unstyled mb-4">
            <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Order Subtotal </strong><strong>{cart.cartTotalAmount}</strong></li>
            <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Total Item(s):</strong><strong>{cart.cartTotalQuantity}</strong></li>
            <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Tax</strong><strong>$0.00</strong></li>
            <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Total</strong>
              <h5 className="font-weight-bold">{cart.cartTotalAmount}</h5>
            </li>
          </ul><a href="#" className="btn btn-dark rounded-pill py-2 btn-block">Procceed to checkout</a>
        </div>
      </div>
    </div>

  </div>
</div>
</div>
                 </div>):
                        
                 (<div>
                     <div className="px-4 px-lg-0">


  <div className="pb-5">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">

   
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col" className="border-0 bg-light">
                    <div className="p-2 px-3 text-uppercase">Product</div>
                  </th>
                  <th scope="col" className="border-0 bg-light">
                    <div className="py-2 text-uppercase">Price</div>
                  </th>
                  <th scope="col" className="border-0 bg-light">
                    <div className="py-2 text-uppercase">Quantity</div>
                  </th>
                  <th scope="col" className="border-0 bg-light">
                    <div className="py-2 text-uppercase">Remove</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                  {cart.cartItems.map(item =><tr>
                  <th scope="row" className="border-0">
                    <div className="p-2 line1">
                      <img src={item.image} alt="" width="70" className="img-fluid rounded shadow-sm"/>
                      <div className="ml-3 d-inline-block align-middle">
                        <h5 className="mb-0"> <p className="text-dark d-inline-block align-middle">{item.title}</p></h5><span className="text-muted font-weight-normal font-italic d-block">Category: {item.category}</span>
                      </div>
                    </div>
                  </th>
                  <td className="border-0 align-middle"><strong>{item.price}</strong></td>
                  <td className="border-0 align-middle tdbtn"><button onClick={()=>{handleDecrease(item)}}> - </button><strong> {item.cartQuantity} </strong><button onClick={()=>{handleIncrease(item)}}> + </button></td>
                  <td className="border-0 align-middle"><span onClick={()=>{handleRemove(item)}} className="text-dark"><i className="fa fa-trash"></i></span></td>
                </tr>)}
                <tr>
                  <th scope="col" className="border-0 bg-light">
                    <div className="p-2 px-3 "></div>
                  </th>
                  <th scope="col" className="border-0 bg-light">
                    <div className="py-2 text-uppercase total">TOTAL: {cart.cartTotalAmount}</div>
                  </th>
                  <th scope="col" className="border-0 bg-light">
                    <div className="py-2 text-uppercase">ITEM: {cart.cartTotalQuantity}</div>
                  </th>
                  <th scope="col" className="border-0 bg-light">
                    <button className="py-2 text-uppercase clearall" onClick={()=>{handleClear()}}>CLEAR ALL</button>
                  </th>
                </tr>
                <tr>
                  <th scope="col" className="border-0 bg-light">
                    <div className="p-2 px-3 "></div>
                  </th>
                  <th scope="col" className="border-0 bg-light">
                    <div className="py-2 text-uppercase total"></div>
                  </th>
                  <th scope="col" className="border-0 bg-light">
                    <div className="py-2 text-uppercase"></div>
                  </th>
                  <th scope="col" className="border-0 bg-light">
                    <Link to="/"><button className="py-2 text-uppercase continue" >Shopping More</button></Link>
                  </th>
                </tr>
                
                
                
              </tbody>
            </table>
          </div>
          
        </div>
      </div>

      <div className="row py-5 p-4 bg-white rounded shadow-sm">
        <div className="col-lg-6">
          <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Coupon code</div>
          <div className="p-4">
            <p className="font-italic mb-4">If you have a coupon code, please enter it in the box below</p>
            <div className="input-group mb-4 border rounded-pill p-2">
              <input type="text" placeholder="Apply coupon" aria-describedby="button-addon3" className="form-control border-0"/>
              <div className="input-group-append border-0">
                <button id="button-addon3" type="button" className="btn btn-dark px-4 rounded-pill"><i className="fa fa-gift mr-2"></i>Apply coupon</button>
              </div>
            </div>
          </div>
          <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Instructions for seller</div>
          <div className="p-4">
            <p className="font-italic mb-4">If you have some information for the seller you can leave them in the box below</p>
            <textarea name="" cols="30" rows="2" className="form-control"></textarea>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Order summary </div>
          <div className="p-4">
            <p className="font-italic mb-4">Shipping and additional costs are calculated based on values you have entered.</p>
            <ul className="list-unstyled mb-4">
              <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Order Subtotal </strong><strong>{cart.cartTotalAmount}</strong></li>
              <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Total Item(s):</strong><strong>{cart.cartTotalQuantity}</strong></li>
              <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Tax</strong><strong>$0.00</strong></li>
              <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Total</strong>
                <h5 className="font-weight-bold">{cart.cartTotalAmount}</h5>
              </li>
            </ul><a href="#" className="btn btn-dark rounded-pill py-2 btn-block">Procceed to checkout</a>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>

                 </div>)}

            </div>
)
}

export default Cart