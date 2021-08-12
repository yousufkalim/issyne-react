import React from 'react';
import "./Heading.css";

const Heading = (props) => {
    return (
        <div className="cgu-heading">
            {props.children}
        </div>
    )
}

export default Heading
