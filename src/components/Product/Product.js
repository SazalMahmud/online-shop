import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons';

import './Product.css';
import Rating from 'react-rating';

const Product = (props)=> {
    console.log(props);
    const{name , img, price, stock,seller,shipping,star} =props.products;
    // icon use
    const element = <FontAwesomeIcon icon={faCartShopping} />
    return (
        <div className='product'>
            <div>
                <img src={img} alt=""/>
           </div>
            <div className="details">
                <h3 className='pro'> Product: {name}</h3>
                <h5>price :{price}</h5>
                <p><small>Available stock:-{stock}</small></p>
                <p><small>By: {seller}</small></p>

               <h4>Rating :<Rating className="rating" initialRating={star} 
                  emptySymbol="fa fa-thumbs-down fa-2x icon-color"
                 fullSymbol="fa fa-thumbs-up fa-2x icon-color" ></Rating></h4> 

                <h4>selling company name : {seller}</h4>
                <button onClick={()=>props.handleAddToCart(props.products)}
                 className='Cart'>{element}Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;