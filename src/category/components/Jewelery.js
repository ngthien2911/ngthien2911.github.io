import React,{useEffect,useState} from 'react';
import {Link} from'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import './Electronics.css';
import {useDispatch, useSelector} from 'react-redux';
import { addToCart, clearCart, countTotalPrice, decreaseCartQuantity, removeFromCart } from '../../cart/cartSlice';

function Jewelery(props) {

    const [category,setCategory]=useState([])
    const [isLoading,setIsLoading] = useState(false)
    const cart = useSelector((state)=> state.cart)
    const dispatch = useDispatch()
    function handleIncrease(item){
        dispatch(addToCart(item))
    }
    useEffect(()=>{
        setIsLoading(true)
        fetch('https://fakestoreapi.com/products/category/jewelery')
        .then(x=>x.json())
        .then(y=>{
            setCategory(y)
          setIsLoading(false)  
        })
        return ()=>{
            setCategory([])
        }
        
    },[])
    return (
        // <div>{isLoading?<CircularProgress/>:<div>{category.map(item => {return <Link to={`/${item.id}`} key={item.id}><div>{item.title}</div></Link>})}</div>}</div>
        <div>
        <div className="container-fluid d-flex justify-content-center theflex">
            <div className="row mt-5">
                {category.map(item =><div className="col-sm-4">
                    <div className="card"> <img src={item.image} className=" theimg" width="100%"/>
                        <div className="card-body pt-0 px-0">
                            <div className="d-flex flex-row justify-content-between mb-0 px-3"> <small className="text-muted mt-1">PRICE: </small>
                                <h6>{item.price} $</h6>
                            </div>
                            <hr className="mt-2 mx-3"/>
                            <div className="d-flex flex-row justify-content-between px-3 pb-4 title">
                                {item.title}
                            </div>
                            <div className="d-flex flex-row justify-content-between p-3 mid description">
                                {item.description}
                            </div> <Link to={`/products/category/jewelery` }><small className="text-muted key pl-3">{item.category}</small></Link>
                            <div className="mx-3 mt-3 mb-2"><button onClick={()=>{handleIncrease(item)}} type="button" className="btn btn-danger btn-block"><small>ADD TO CART</small></button></div> 
                        </div>
                    </div>
                </div>)}
                
                
            </div>
        </div>
                </div>
        );
}

export default Jewelery;