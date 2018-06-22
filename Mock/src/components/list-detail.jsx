import React from 'react';
import {stars} from '../helpers';
import {information} from '../Data/JSONinfo.js';


const listDetail = ({status,viewers}) => {
    console.log(this.state)
        let info;
        let arr = information;
        console.log(information)
        arr = arr.sort((a,b) => {
             return b.averageRating - a.averageRating
         })
        if (status === false){
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
        if (status === true){
            let arr = information;
            arr = arr.sort((a,b) => {
                 return a.averageRating - b.averageRating
             })
            info = <div className="container">
            <div className="item">
            {arr.map((item,index) => {
                return(
                    <div className="cd">
                        <div className="item2">
                <img
                className="pic" 
                src ={item.profile_picture}
                key = {index}
                 />
                 </div>
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
                    <span className='icon'>
                    {stars(item.averageRating)}
                    </span>
                    
                </div>
                <button
                onClick={this.unsort}
                className="btnlist"> 
                <span className="font">
                View Profile</span>
                </button>
                 </div>

                )
            })}
            </div>

            
        </div>
    }
    if (viewers === false){
        let arr = information;
        arr = arr.sort((a,b) => {
             return b.views.length - a.views.length
         })
        info = <div className="container">
        <div className="item">
        {arr.map((item,index) => {
            return(
                <div className="cd">
                    <div className="item2">
            <img
            className="pic" 
            src ={item.profile_picture}
            key = {index}
             />
             </div>
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
            {console.log(item.averageRating)}
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
        </div>
    </div>
    }
    if (viewers === true){
        let arr = information;
        arr = arr.sort((a,b) => {
             return b.views.length - a.views.length
         })
        info =
        <div className="item">
        {arr.map((item,index) => {
            return(
                <div className="cd">
                    <div className="item2">
            <img
            className="pic" 
            src ={item.profile_picture}
            key = {index}
             />
             </div>
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
                
                <span className='icon'>
                {stars(item.averageRating)}
                    </span>
            </div>
            <button
            onClick={this.unsort}
            className="btnlist"> 
            <span className="font">
            View Profile</span>
            </button>
             </div>

            )
        })}
 </div>
}
    
    return (
        <div className="container">
            {info}
        </div>

    )
}

export default listDetail;


