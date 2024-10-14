import React, { useState } from 'react'
import ItemListing from './ItemListing'
import { TrackingModal } from './TrackingModal'

const CartContent = () => {

    return (
        <>
            <ItemListing  />
            <ItemListing />
            <ItemListing />
            </>

    )
}

export default CartContent