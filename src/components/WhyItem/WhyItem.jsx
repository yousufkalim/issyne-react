import React from 'react';
import './WhyItem.css';

const WhyItem = (props) => {
    const {item} = props;
    return (
        <div className="why-item">
            <div className="why-item-image"><img src={item.cimage} /></div>
            <div className="why-item-detail"></div>
        </div>
    )
}

export default WhyItem
