import React from 'react';
import '../styles/topSection.css';
import '../Data/JSONinfo.js';
import { Container, Row, Col } from 'reactstrap';
import Button from './buttonDrop.jsx';



const Section = (props) => {
    return (
        <div className="position">
            <span className="contract">
            <h5>Newest Contractors in Bay Area,Ca<span id="results">
            ({props.results} Results)</span>  </h5> 
            </span> 
            <Button name='Sort By(Best Match)' class="btn" color="primary">Sort By(BestMatch)</Button>
            
        </div>
        

    )
}

export default Section;
