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
            
            <div class="dropdown">
              
              {/* <button class="btn btn-secondary dropdown-toggle cartbtn" type="button" id="dropdownMenu2" data-toggle="dropdown"  aria-haspopup="true" aria-expanded="false"> */}
              <button class="btn btn-secondary dropdown-toggle cartbtn" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
              <FontAwesomeIcon className="carticon" icon={faCartPlus}/>
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
             
                  {cart.cartItems.map(item =><div class="px-4 py-3" onSubmit={e=>{e.preventDefault()}}>
                    <div class="form-group divitem">
                        <img className="itemimg" src={item.image}></img>
                        <div className="item-info">{item.title}</div>
                        <button type="submit" className="addbtn" onClick={()=>{handleDecrease(item)}} >-</button>
                        <div className="item-text">{item.cartQuantity}</div>
                        <button type="submit" className="addbtn" onClick={()=>{handleIncrease(item)}}>+</button>
                        <button type="submit" className="xbtn" onClick={()=>{handleRemove(item)}}>x</button>
                        
                    </div>
                </div>  )}
                <div>TOTAL: {cart.cartTotalAmount}</div>
                <Link to="/cart"><button className="checkoutbtn">Check Out</button></Link>
                </div>
                </div>
              <div className="welcomemess">Welcome, {user.name} </div>
              <Link to="#">               <Button ><span  className="child"><FontAwesomeIcon icon={faUserCircle}/> </span></Button></Link>
        
        </ButtonGroup>
   
   
    </div>):

        (<Loginform Login={Login} error={error} />)}
      </div>

        
    )
}

export default Nav;