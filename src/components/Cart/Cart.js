import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} =props;
    console.log(cart);

    
    let total = 0;
    var TotalQuntity=0;
    for(const products of cart){
        console.log(products);
        if(!products.quantity)
        {

            products.quantity = 1;
        }
    
        total = total + products.price * products.quantity;
        TotalQuntity = TotalQuntity + products.quantity;
    }                       
    const shipping = total > 0 ? 15: 0;
    const tax =(total + shipping) *0.13;
    const TotalBil =total+shipping+tax;
    return (
        <div className='summary'>
            <h2> Order Summary</h2>
             <h4>Items Ordered:{TotalQuntity}</h4>
             <h6> Total : {total.toFixed(2)}</h6>
             <p>Shipping : {shipping.toFixed(2)}</p>
             <p> Tax :{tax.toFixed(2)}</p>
             <p>TotalBil :{TotalBil.toFixed()}</p>
             <p>------------------------------</p>
        </div>
    );
};

export default Cart;