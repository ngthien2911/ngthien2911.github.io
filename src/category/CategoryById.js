import React from 'react';
import { useParams } from 'react-router';
import { useGetCategoryByIdQuery } from '../product/productAPI';
import CircularProgress from '@mui/material/CircularProgress';
import '../product/ProductById.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBackspace, faCartPlus, faStar, faWarehouse} from '@fortawesome/free-solid-svg-icons';
import {Link,Navigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../cart/cartSlice';



function CategoryById(props) {
    const {id} =useParams();
    const {data,isLoading} = useGetCategoryByIdQuery(id)
	const dispatch = useDispatch()
	function handleAddToCart(item){
		dispatch(addToCart(item))
	}
    


    return ( isLoading?<CircularProgress  />:
                                            <div>
                                                {data?.map(item => {return <div key={item.id}>
                                                    <section className="light">
	<div className="container py-2">
		<div className="h1 text-center text-dark" id="pageHeaderTitle"></div>

		<article className="postcard light blue aproduct">
			<a className="postcard__img_link aproduct" href="#">
				<img className="postcard__img" src={item.image} alt="Image Title" />
			</a>
			<div className="postcard__text t-dark">
				<h1 className="postcard__title blue"><a href="#" className="aproduct" >{item.title}</a></h1>
				<div className="postcard__subtitle small">
					
				</div>
				<div className="postcard__bar"></div>
				<div className="postcard__preview-txt">{item.description}</div>
				<ul className="postcard__tagbox">
				<li className="tag__item"><Link to="/products/category" style={{textDecoration:"none"}}><FontAwesomeIcon icon={faBackspace}/> Back</Link></li>
					<li className="tag__item"><FontAwesomeIcon icon={faStar}/> Rating: {item.rating.rate} </li>
					<li className="tag__item"><FontAwesomeIcon icon={faWarehouse}/> Inventory: {item.rating.count}</li>
					<li className="tag__item play blue">
						<span style={{cursor:"pointer"}} onClick={()=>{handleAddToCart(item)}} className="aproduct"><FontAwesomeIcon icon={faCartPlus}/> Add to cart</span>
					</li>
				</ul>
			</div>
		</article>
		
	</div>
</section> 
                                                                            </div>})}
                                            </div>
    );
}

export default CategoryById;