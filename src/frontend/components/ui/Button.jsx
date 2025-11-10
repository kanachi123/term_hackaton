import React from 'react';
import {Link} from 'react-router-dom';

export default function Button({as = 'button',to,children,...props}){
    if(to){
        return (<Link to={to}{...props} style={{textDecoration:'none' , ...props.style}}><button className="pixel-button">{children}</button></Link>);
    }
    if(as === 'a'){
        return <a{...props}>{children}</a>;
    }

    return <button{...props}>{children}</button>;

};