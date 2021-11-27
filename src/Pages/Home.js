import React,{useEffect} from 'react';
import '../App.css';

import {useDispatch,useSelector} from 'react-redux'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
// import '../Homepanel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCartPlus} from '@fortawesome/free-solid-svg-icons';
import { getProduct } from '../product/productSlice';
import { Link } from 'react-router-dom';
import { productsApi, useGetAllProductsQuery } from '../product/productAPI';
import { addToCart } from '../cart/cartSlice';
import Carousel from './Carousel';
import './carousel.scss'
import $ from 'jquery'


function Home(props) {

    const {data,error, isLoading}  = useGetAllProductsQuery()
    const dispatch = useDispatch()
    
    const handleAddToCart = (array) =>{
            dispatch(addToCart(array))
    }
    
    $('[data-text]').on('keyup', function(){
        $(this).attr('data-text', $(this).text());
      });

    return (
        <div>
          
          <h1 className="firstline">WELCOME TO  <span className="TITLE">SHOPANORDIC</span></h1>
          <Carousel/>
          <div className="textbanner">
          <div class="text-effect textmain">
  
            <h1 class="neon" data-text="SHOPPING!" contenteditable>Neon</h1>
            <div class="gradient"></div>
            <div class="spotlight"></div>
        </div>
        <div class="text-effect textmain">
  
            <h1 class="neon" data-text="NOW!" contenteditable>Neon</h1>
            <div class="gradient"></div>
            <div class="spotlight"></div>
        </div>
        </div>
           
           <div>
           <div className="container mt-5 mb-5">
    <div className="row g-1">
    {data?.map((array) => { return (
                                    
                                    <div className="col-md-4" key={array.id}>
                                        <div className="p-card" >
                                            <div className="p-carousel">
                                                <div className="carousel " data-ride="carousel" id="carousel-1">
                                                <Link to={`/${array.id}`} className="linkproduct"><div className="carousel-inner" role="listbox">
                                                        <div className="carousel-item active"><img className="w-100 d-block" src={array.image} alt="Slide Image" style={{objectFit:"cover",width:"10em",height:"30em"}}/></div>
                                                        <div className="carousel-item"><img className="w-100 d-block" src={array.image} alt="Slide Image" style={{objectFit:"cover",width:"10em",height:"30em"}}/></div>
                                                        <div className="carousel-item"><img className="w-100 d-block" src={array.image} alt="Slide Image" style={{objectFit:"cover",width:"10em",height:"30em"}}/></div>
                                                    </div></Link>
                                                    <div><a className="carousel-control-prev" href="#carousel-1" role="button" data-slide="prev"><span className="carousel-control-prev-icon"></span><span className="sr-only">Previous</span></a><a className="carousel-control-next" href="#carousel-1" role="button" data-slide="next"><span className="carousel-control-next-icon"></span><span className="sr-only">Next</span></a></div>
                                                    <ol className="carousel-indicators">
                                                        <li data-target="#carousel-1" data-slide-to="0" className="active"></li>
                                                        <li data-target="#carousel-1" data-slide-to="1"></li>
                                                        <li data-target="#carousel-1" data-slide-to="2"></li>
                                                    </ol>
                                                </div>
                                            </div>
                                            <div className="p-details">
                                                <div className="d-flex justify-content-between align-items-center mx-2">
                                                    <h5 style={{fontSize:"1em",textAlign:"center",height:"5em"}} >{array.title}</h5>
                                                </div>
                                                <div className="mx-2">
                                                    <hr className="line"/>
                                                </div>
                                                <div className="d-flex justify-content-between mt-2 spec mx-2">
                                                    <div className="d-flex flex-column align-items-center">
                                                        <h6 className="mb-0">RATING</h6><span>{array.rating.rate}</span>
                                                    </div>
                                                    <div className="d-flex flex-column align-items-center">
                                                        <h6 className="mb-0">{array.price}</h6><span>SALE!</span>
                                                    </div>
                                                    <div className="d-flex flex-column align-items-center">
                                                        <h6 className="mb-0">Inventory</h6><span>{array.rating.count}</span>
                                                    </div>
                                                </div>
                                                
                                                <div className="buy mt-3"><button onClick={()=>{handleAddToCart(array)}} className="btn btn-primary btn-block btn-cart" type="button"><FontAwesomeIcon icon={faCartPlus}/></button></div>
                                                <div className="buy mt-3"><Link to="/cart" style={{textDecoration:"none"}}><button onClick={()=>{handleAddToCart(array)}} className="btn btn-primary btn-block" type="button">Buy Now</button></Link></div>
                                            </div>
                                        </div>
                                </div>
                                )
                            } )}
        
    </div>
</div>
           </div>


            
            


            
            
        </div>
        
    );
}

export default Home;