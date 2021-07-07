import React from 'react'

const ShopItem = (props) => {
    const {item} = props;
    return (
            <li key={item.id}>{item.item}{item.area}</li>
    )
}

export default ShopItem;