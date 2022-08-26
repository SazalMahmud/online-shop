import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import{addToDb, getStoredCart} from '../../utilities/fakedb'
import './Shop.css'

const Shop = () => {

    // setProducts -> product -> Products =props
    const [product ,setProducts] =useState([]);

    //button er jonno usestate
    const[cart ,setCart] =useState([]);

    //search er jonno
    const[displsyProducts , setDisplayProduct]=useState([]);
    useEffect( ()=>{
          fetch('./products.JSON')
          .then(Response => Response.json())
          .then(data =>{
            setProducts(data);
            setDisplayProduct(data);

          });
            

         
    },[]);

    //lokal storage useeffect
    //fakedb.js theka call korse-----getStoredCart() 
    useEffect(()=>{
       if(product.length){
             const savedCart =getStoredCart();
             const storedCart = [];
             for (const  key in savedCart){
                 const addedProduct = product.find(products => products.key === key);

                 if(addedProduct){
                   const quantity = savedCart[key];
                   addedProduct.quantity =quantity;
                   storedCart.push(addedProduct);
             } 
        }
         setCart(storedCart);
       }
    },[product])

    //button
    const handleAddToCart =(products) =>{
        const newCart = [...cart, products];
        setCart(newCart);
        //local storage data save
        addToDb(products.key);
    }

    //search event handeler
    const handleSearch =event =>{
        const searchText=event.target.value;
        const matchProducts = product.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProduct(matchProducts);
        console.log(matchProducts);

    }
    return (
        <div>

            <div className="search-container"> <input type=" " 
             onChange={handleSearch}
            placeholder="If you want ,then Search"/> 

            </div>
        <div className="shop-container">
            <div className="product-container">
            <h1 className='total'>Total our products:{product.length}</h1>
                 
                 {
                    // child (Product.js)
                    displsyProducts.map(products => <Product 
                        //key er kono kaj ny
                     key ={products.key} 

                     //Products ka props korbo Product.js a
                     products={products}

                     //button
                     handleAddToCart ={handleAddToCart}

                     >
                        
                             </Product>)
                 }
            </div>
            <div className="cart-container">
                  <Cart cart ={cart}></Cart>
            </div>
            
        </div>

     </div>
    );
};

export default Shop;