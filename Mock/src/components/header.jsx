import React from 'react';
import '../styles/header.css';

const Header = ({image,alt}) => {
    return (
        <div className='Check'>
            <img 
            className="imageSize" 
            src = {image} 
            alt='' />
        </div>

    )
}

export default Header;