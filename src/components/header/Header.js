import React from 'react';
import logo from '../../images/image.jpg'
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
          <h4>@Sazal Mahmud</h4>
           <img className='logo' src={logo} alt=""/>
           <nav>
             <a href="/shop">Shop</a>
             <a href="/orders">Order Review</a>
             <a href="/inventory">Manage Inventory</a>
           </nav>
        </div>
        
        
    );
};

export default Header;