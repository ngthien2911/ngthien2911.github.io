import React, { useEffect } from 'react';
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import $ from 'jquery';
// import '../App.css';
// import '../nav.css';
import '../menu.scss';
import {useDispatch, useSelector} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCartPlus, faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { addToCart, clearCart, countTotalPrice, decreaseCartQuantity, removeFromCart } from '../cart/cartSlice';



function Nav(props) {

    const cart = useSelector((state)=> state.cart)
    const dispatch = useDispatch()
    function handleRemove(item){
        dispatch(removeFromCart(item))
    }
    function handleDecrease(item){
        dispatch(decreaseCartQuantity(item))
    }
    function handleIncrease(item){
        dispatch(addToCart(item))
    }
    
      
        
    useEffect(()=>{ dispatch(countTotalPrice())
        
    },[cart,dispatch])
        
      

    return (
        <div className="menunavbar">
            
            <ButtonGroup className="group" variant="text" aria-label="large outlined primary button group">
            <Link to="/"                style={{textDecorationLine:"none"}} >              <Button ><span className="child"  >Home</span></Button>               </Link>
            <Link to="products/category"        style={{textDecorationLine:"none"}}>       <Button ><span className="child">Categories</span></Button>            </Link>
            
            <Link to="#" >
                <Button >
                    <ul className="nav navbar-nav navbar-right">
                        <li className="dropdown">
                    
                        <p className="noti">{cart.cartTotalQuantity}</p>
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" > <FontAwesomeIcon className="carticon" icon={faCartPlus}/></a>
                       
                        <ul className="dropdown-menu dropdown-cart" role="menu">
                            {cart.cartItems.map(item =><li>
                                <span className="item">
                                    <span className="item-left">
                                        <img src={item.image} alt={item.image} />
                                        <span className="item-info">
                                            <span>{item.title}</span>
                                            <span className="itemprice">{item.price} $</span>
                                        </span>
                                    </span>
                                    <span className="item-right">
                                        <div>
                                        <button onClick={()=>{handleDecrease(item)}} className="countbtn">-</button>
                                        <button className="amount">{item.cartQuantity} </button>
                                        <button onClick={()=>{handleIncrease(item)}} className="countbtn">+</button>
                                        </div>
                                        <button onClick={()=>{handleRemove(item)}} className="btn btn-xs btn-danger pull-right xbtn">X</button>
                                    </span>
                                </span>
                            </li>)}
                            
                            <li className="divider"></li>
                            <li>TOTAL: {cart.cartTotalAmount}</li>
                            <li><Link to="/cart"><button  className="text-center checkoutbtn" >Check Out</button></Link></li>
                        </ul>
                        </li>
                    </ul>
                </Button>
            </Link>
            
            <Link to="#">               <Button ><span  className="child"><FontAwesomeIcon icon={faUserCircle}/> </span></Button></Link>
            </ButtonGroup>
       {/* <nav>
  <div className="container">
    

    <ul className="navbar-right">
      <li><a href="#" id="cart"><i className="fa fa-shopping-cart"></i> Cart <span className="badge">3</span></a></li>
    </ul> 
  </div> 
</nav>


<div className="container">
  <div className="shopping-cart">
    <div className="shopping-cart-header">
      <i className="fa fa-shopping-cart cart-icon"></i><span className="badge">3</span>
      <div className="shopping-cart-total">
        <span className="lighter-text">Total:</span>
        <span className="main-color-text">$2,229.97</span>
      </div>
    </div> 

    <ul className="shopping-cart-items">
      <li className="clearfix">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item1.jpg" alt="item1" />
        <span className="item-name">Sony DSC-RX100M III</span>
        <span className="item-price">$849.99</span>
        <span className="item-quantity">Quantity: 01</span>
      </li>
    </ul>

    <a href="#" className="button">Checkout</a>
  </div> 
</div>  */}
       
        </div>
    )
}

export default Nav;