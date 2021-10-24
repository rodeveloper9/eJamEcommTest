import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import getListingData from './../../actions/listingAction';
import ListingItem from './ListingItem';
import Header from "../header/header";
import FullPageLoader from "../common/loader/FullpageLoader";

const ProductListing = () => {
    const { listingData = [] } = useSelector((state) => {
        const { listReducer = {} } = state;
        return listReducer
    });
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getListingData());
    }, []);

    const addToCartHandler = (payload) => {
        console.log('payload ===>', payload)
    }

    return (
        <Fragment>
            <Header />
            <div className="items_wrap">
                {listingData.length ? listingData.map(items => {
                    return <ListingItem
                        data={items}
                        addToCartHandler={addToCartHandler}
                    />
                })
                    :
                    <FullPageLoader />
                }
            </div>
        </Fragment>
    )
}

export default ProductListing
