import React from 'react';
import { Button, Card } from 'react-bootstrap';

const StoreItem = ({ item, addToCart , cartItems}) => {
    const { id, name, price, imgUrl } = item;

    const cartItem = cartItems.find((catrtItem) => cartItem.id=== id)
    const quantity = cartItem ? cartItem.quantity : 0

    return (
        <Card className = 'h-100'>

            <Card.Img
                variant = 'top'
                src = { imgUrl }
                height = '300px'
                style = { { objectFit: 'contain' } }
            />
            <Card.Body className = 'd-flex-column'>

                <Card.Title className = 'd-flex justify-content-space-between align-items-baseline mb-4'>

                    <span className = 'fs-2'>{ name }</span>
                    <span className = 'ms-auto text-muted'>{ price }</span>

                </Card.Title>

                <div className = 'mt-auto'>

                    { quantity === 0 ?
                        <Button className = 'w-100' onClick={()=> addToCart(item)}>Add to Cart</Button>
                        : (
                            <div className = 'd-flex align-items-center flex-column'
                                 style = { { gap: '.5rem' } }>
                                <div className = 'd-flex align-items-center justify-content-center '
                                     style = { { gap: '.5rem' } }>
                                    <Button>-</Button>
                                    <div className='fs-3'><span>{ quantity } in cart</span></div>
                                    <Button>+</Button>
                                </div>
                                <Button variant = 'danger' size = 'sm'>Remove</Button>
                            </div>)

                    }

                </div>

            </Card.Body>

        </Card>
    );
};

export default StoreItem;
