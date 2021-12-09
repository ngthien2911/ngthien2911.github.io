
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

function Loginform({Login,error}) {

    const [details, setDetails] = useState({name:"",email:"",password:""})
    const submitHandler = e =>{
        Login(details);
        e.preventDefault();
        
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
            
            <ButtonGroup className="group" variant="text" aria-label="large outlined primary button group">
            <Link to="/"                style={{textDecorationLine:"none"}} >              <Button ><span className="child"  >Home</span></Button>               </Link>
            <Link to="products/category"        style={{textDecorationLine:"none"}}>       <Button ><span className="child">Categories</span></Button>            </Link>
            
            <div class="dropdown">
              
              {/* <button class="btn btn-secondary dropdown-toggle cartbtn" type="button" id="dropdownMenu2" data-toggle="dropdown"  aria-haspopup="true" aria-expanded="false"> */}
              <button class="btn btn-secondary dropdown-toggle cartbtn" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
              <FontAwesomeIcon className="carticon" icon={faCartPlus}/>
              <p className="numbericon">{cart.cartTotalQuantity}</p>
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

            {/* <Link to="#" >
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
            </Link> */}
            
            {/* <Link to="#">               <Button ><span  className="child"><FontAwesomeIcon icon={faUserCircle}/> </span></Button></Link> */}
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle loginbtn" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Log In
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                  <div className="theerror">{error}</div>
                <form class="px-4 py-3" onSubmit={submitHandler}>
                <div class="form-group">
                    <label for="examplename">Name</label>
                    <input type="text" class="form-control" id="exampleDropdownFormEmail1" placeholder="Your name" value={details.name} onChange={e=>{setDetails({...details,name:e.target.value})}}/>
                  </div>
                  <div class="form-group">
                    <label for="exampleDropdownFormEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="admin@admin.com" value={details.email} onChange={e=>{setDetails({...details,email:e.target.value})}}/>
                  </div>
                  <div class="form-group">
                    <label for="exampleDropdownFormPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="admin" value={details.password} onChange={e=>{setDetails({...details,password:e.target.value})}}/>
                  </div>
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="dropdownCheck"/>
                    <label class="form-check-label" for="dropdownCheck">
                      Remember me
                    </label>
                  </div>
                  <button type="submit" class="btn btn-primary">Sign in</button>
                </form>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">New around here? Sign up</a>
                  <a class="dropdown-item" href="#">Forgot password?</a>
                  </div>
            </div>
            </ButtonGroup>
       
       
        </div>
        
    );
}

export default Loginform;