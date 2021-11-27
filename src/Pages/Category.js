import React,{useEffect,useState} from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { getCategory,getElectronics, getJewelery } from '../category/categorySlice';
import {useDispatch,useSelector} from 'react-redux'
import { useGetCategoriesQuery } from '../product/productAPI';
import {BrowserRouter as Router,Routes,Route, Link} from "react-router-dom";
import Electronics from '../category/components/Electronics';
import Jewelery from '../category/components/Jewelery';
import MenClothing from '../category/components/MenClothing';
import WomenClothing from '../category/components/WomenClothing';
import '../App.css';



export default function Category(props) {
    // const {data} = useGetCategoriesQuery()
    const [category,setCategory]=useState([])
    const [isLoading,setIsLoading] = useState(false)
    
    useEffect(()=>{
        setIsLoading(true)
        fetch('https://fakestoreapi.com/products/categories')
        .then(x=>x.json())
        .then(y=>{
            setCategory(y)
          setIsLoading(false)  
        })
        
    },[])

    


    return <div>
        {isLoading?<CircularProgress/>:<div><div className="category"><Link to={`/products/category/${category[0]}` } style={{textDecoration:"none"}}><h3 className="categorytitle">ELECTRONICS</h3></Link>
                                            <Electronics/>
                                            <br/><br/>
                                            </div>
                                            <div className="category">
                                            <Link to={`/products/category/${category[1]}`} style={{textDecoration:"none"}}><h3 className="categorytitle">JEWELERY</h3></Link>
                                            <Jewelery/>
                                            <br/><br/>
                                            </div>

                                            <div className="category">
                                            <Link to={`/products/category/${category[2]}`}style={{textDecoration:"none"}}><h3 className="categorytitle">MEN'S CLOTHING</h3></Link>
                                            <MenClothing/>
                                            <br/><br/>
                                            </div>

                                            <div className="category">
                                            <Link to={`/products/category/${category[3]}`}style={{textDecoration:"none"}}><h3 className="categorytitle">WOMEN'S CLOTHING</h3></Link>
                                            <WomenClothing/>
                                            </div>
                                        </div>}
    
            </div>





}