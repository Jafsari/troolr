import React from 'react';
import '../styles/HeaderNav.css';
import { Icon } from 'react-icons-kit'
import {threeUp} from 'react-icons-kit/iconic/threeUp'
import { Navbar } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';



const HeaderNav = ({options,icons}) => {
    console.log(icons)
    return (
        <div className="color">
        {options.map((item,index) => {
            return (
            <span 
            className="items" 
            key ={index}>
            <span className="icons">
             <Icon icon={icons[index]} /> 
             </span>
            {item}
            </span>
            )})}
        </div>
        
    )
}

export default HeaderNav;