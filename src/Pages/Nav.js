import React, { useEffect, useState } from 'react';
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
import Loginform from './Loginform';



function Nav(props) {

    const adminUser = {
      email:"admin@admin.com",
      password:"admin"
    }

    const [user,setUser] = useState({name:"",email:"",password:""})
    const [error,setError] = useState("")

    const Login = details =>{
      console.log(details)
      if (details.email == adminUser.email && details.password == adminUser.password)
      {setUser({
        name:details.name,
        email:details.email,
        password:details.password
      })}
      else {
        setError("Wrong credential. Please try again!")
      }
    }

    const Logout = () =>{
      console.log('Logged out')
    }


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
        {(user.email != "")?
        (<div >
            
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
        <div className="welcomemess">Welcome, {user.name} </div>
        <Link to="#">               <Button ><span  className="child"><FontAwesomeIcon icon={faUserCircle}/> </span></Button></Link>
        
        </ButtonGroup>
   
   
    </div>):

        (<Loginform Login={Login} error={error} />)}
      </div>

        
    )
}

export default Nav;