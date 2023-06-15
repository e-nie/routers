import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import storeItems from '../data/items.json';
import StoreItem from '../components/StoreItem';


const Store = () => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            const updatedCartItems = cartItems.map(cartItem =>
                cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
            );
            setCartItems((updatedCartItems))
        } else {
            setCartItems([...cartItems], {...item, quantity: 1})
        }
    };

    return (<div>
        <h1>Store Page</h1>
        <Row md = { 2 } xs = { 1 } lg = { 3 } // при разном размере экрана пок-ет разное кол-во карточек
             className = 'g-3'
        >
            { storeItems.map(item => (
                <Col key = { item.id }>

                    <StoreItem
                        item = { item }
                        addToCart={addToCart}
                        cartItems={cartItems}
                    />
                </Col>
            )) }
        </Row>

    </div>);
};

export default Store;
