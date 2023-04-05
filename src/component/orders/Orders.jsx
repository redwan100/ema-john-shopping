import React, { useState } from 'react'
import Cart from '../cart/Cart'
import { useLoaderData } from 'react-router-dom'
import ReviewItem from '../review/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
  const savedCart = useLoaderData();
  const [cart, setCart] = useState(savedCart)

  const handleRemoveFromCart = (id) =>{
    const updateItem = cart.filter((product)=>product.id !== id);
    setCart(updateItem)
    removeFromDb(id)
  }

  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart()
  };

  return (
    <div className="grid grid-cols-[1fr,_230px]">
      <div className="py-3">
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            {...product}
            handleRemoveFromCart={handleRemoveFromCart}
          />
        ))}
      </div>

      <div className="bg-yellow-100 py-3">
        <Cart cart={cart} handleClearCart={handleClearCart}/>
      </div>
    </div>
  );
}

export default Orders