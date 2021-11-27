import React from 'react';
import { useNavigate, useParams } from 'react-router';
import { useGetProductByIdQuery } from './productAPI';
import './ProductById.scss'
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import {Link} from 'react-router-dom'
import { Today } from '@mui/icons-material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBackspace, faCartPlus, faStar, faWarehouse} from '@fortawesome/free-solid-svg-icons';
import { addToCart } from '../cart/cartSlice';

function ProductById() {
	
    let {id} =useParams()
    const {data,isLoading} = useGetProductByIdQuery(id)
    console.log(data)
	const dispatch=useDispatch();
	

	function handleAddToCart(data){
		dispatch(addToCart(data))
	}
    
    return (
      isLoading?<CircularProgress  />: <div>
                                    

<section className="light">

	<div className="container py-2">
		<div className="h1 text-center text-dark" id="pageHeaderTitle"></div>

		<article className="postcard light blue aproduct">
			<a className="postcard__img_link aproduct" href="#">
				<img className="postcard__img" src={data.image} alt="Image Title" />
			</a>
			<div className="postcard__text t-dark">
				<h1 className="postcard__title blue"><a href="#" className="aproduct" >{data.title}</a></h1>
				<div className="postcard__subtitle small">
					
				</div>
				<div className="postcard__bar"></div>
				<div className="postcard__preview-txt">{data.description}</div>
				<ul className="postcard__tagbox">
				<li className="tag__item"><Link to="/" style={{textDecoration:"none"}}><FontAwesomeIcon icon={faBackspace}/> Back</Link></li>
					<li className="tag__item"><FontAwesomeIcon icon={faStar}/> Rating: {data.rating.rate} </li>
					<li className="tag__item"><FontAwesomeIcon icon={faWarehouse}/> Inventory: {data.rating.count}</li>
					<li className="tag__item play blue">
						<a href="#" onClick={()=>{handleAddToCart(data)}} className="aproduct"><FontAwesomeIcon icon={faCartPlus}/> Add to cart</a>
					</li>
				</ul>
			</div>
		</article>
		
	</div>
</section> 
                                          
 </div>
    );
}

export default ProductById;
