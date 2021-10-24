import React, { useState } from 'react';
import SkeltonLoader from '../common/loader/SkeltonLoader';

const ListingItem = ({ data = {}, addToCartHandler }) => {
    const [showImgLoader, setImgLoader] = useState(true);
    const { title = '', image = '', price = '', id = '' } = data;
    if (showImgLoader) {
        const objImg = new Image();
        objImg.src = image;
        objImg.onload = () => {
            setImgLoader(false);
        };
    }
    return (
        <div className="items_list" key={`list_${id}`}>
            {showImgLoader ? <SkeltonLoader width={'100%'} height={'10rem'} /> : <img className="items_img" src={image} alt="" />}
            <h3 className="items_name">{title}</h3>
            <h4 className="items_price"><span>&#36;</span> {price}</h4>
            <button onClick={() => addToCartHandler(data)} className="ejamBtn">Add to Cart</button>
        </div>
    )
}

export default ListingItem
