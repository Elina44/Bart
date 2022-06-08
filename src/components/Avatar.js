//sur toutes les pages, on importe React
import React from 'react';



const Avatar = props =>{
    return (
        <div>
            <p>{props.firstName}</p>
            <p>{props.lastName.toUpperCase()}</p>
            <img src = {props.photo}/>
        </div>
    )
};

export default Avatar;