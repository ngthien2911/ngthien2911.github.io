import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import CircularProgress from '@mui/material/CircularProgress';
import '../App.css';
import Box from '@mui/material/Box';
import { getProduct } from '../product/productSlice';


function ProductDetail(props) {
    // const [products,setProduct]=useState([])
    // const [loading,setIsLoading] = useState(false)
   
    
    // useEffect(()=>{
    //     setIsLoading(true)
    //     fetch('https://fakestoreapi.com/products')
    //     .then(x=>x.json())
    //     .then(y=>{
    //         setProduct(y)
            
    //       setIsLoading(false)  
    //     })
    // },[])

    // const dispatch = useDispatch();
    // const {products,loading} = useSelector(state =>state.products);

    // useEffect(()=>{
    //     dispatch(getProduct())
        
    // }   
    // ,[dispatch])

    return (
        <div>PRODUCT DETAIL
            {/* {loading?<Box sx={{ display: 'flex',justifyContent:'center',alignItems:'center' }}><CircularProgress  /></Box>:<div>
                                            <h1>LIST OF PRODUCTS</h1>
                                            <div className="list">{products.map((array) => {
                                                return(
                                                    <div key={array.id} className="list-item">
                                                        <p>Product Id: {array.id}</p>
                                                        <p>{array.title}</p>
                                                        <p>{array.price}</p>
                                                        <p>{array.category}</p>
                                                        <p>{array.description}</p>
                                                        <img src={array.image} width="300" height="300"alt={array.image}></img>
                                                        
                                                    </div>
                                                )}
                                                
                                            )}
                                            </div>
                                        </div>}
             */}
        </div>
    );
}

export default ProductDetail;