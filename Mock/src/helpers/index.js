import React from 'react';
import { Icon } from 'react-icons-kit';
import {starFull} from 'react-icons-kit/icomoon/starFull';
import {ic_star_half} from 'react-icons-kit/md/ic_star_half';
import {information} from  '../Data/JSONinfo.js';

export const stars = (num) => {

    if (num === 5) {
        return (
            <div>
            <span className='icon'>
            <Icon icon={starFull} /> 
            </span>
            <span className='icon'>
            <Icon icon={starFull} /> 
             </span>
             <span className='icon'>
             <Icon icon={starFull} /> 
            </span>
             <span className='icon'>
            <Icon icon={starFull} /> 
            </span>
            <span className='icon'>
            <Icon icon={starFull} /> 
            </span>
            </div>
        )
    }
    if (num === 3.5){
        return(
        <div>
        <span className='icon'>
        <Icon icon={starFull} /> 
        </span>
        <span className='icon'>
        <Icon icon={starFull} /> 
         </span>
         <span className='icon'>
         <Icon icon={starFull} /> 
        </span>
        <span className='icon'>
         <Icon icon={ic_star_half} /> 
        </span>
        </div>
        )
    }
}

export const Rating = (rating) => {
    let info;
    let arr = information;
    console.log(information)
    arr = arr.sort((a,b) => {
         return b.averageRating - a.averageRating
     })
    if (rating === false){
        info = 
    <div className="container">
        <div className="item">
        {arr.map((item,index) => {
            return(
                <div className="item2">
              
            <img
            className="pic" 
            src ={item.profile_picture}
            key = {index}
             />
           
             <div >
                 {item.title}
            </div>
            <div>
                {item.name}
            </div>
            <div>
                {item.address.city},{item.address.state}
            </div>
            <div>
                {item.averageRating}
                <span className='icon'>
                {stars(item.averageRating)}
                </span>
            </div>
            <button
            onClick={this.sort}
            className="btnlist"> 
            <span className="font">
            View Profile</span>
            </button>
             </div>

            )
        })}
        </div >
    </div>
}
}