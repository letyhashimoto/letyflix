import React from 'react';

function ButtonLink(props) {
    // props => { classname: "o que alguém passar", href: "/" }
    return (
        <a href={props.href} className={props.className}>
           {props.children}          
        </a>
    );

}

export default ButtonLink;