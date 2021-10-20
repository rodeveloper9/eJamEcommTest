import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../../actions/';

const ProductListing = () => {
    const { counter = 0 } = useSelector((state) => {
        const { listReducer = {} } = state;
        return listReducer
    });
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => dispatch(allActions.listingAction.increment())}>+</button>
            {counter}
            <button onClick={() => dispatch(allActions.listingAction.decrement())}>-</button>
        </div>
    )
}

export default ProductListing
