import React, { useState } from 'react'

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)
	const handleAddToCart = () => {
    setInCart((inCart) => !inCart)
  }
  const inCartClass = inCart ? 'in-cart' : ''
  console.log(inCartClass)
	return (
		<li className={inCartClass}>
			<span>{name}</span>
			<span className='category'>{category}</span>
			<button className='add' onClick={handleAddToCart}>
				{inCart ? 'Remove From Cart' : 'Add to Cart'}
			</button>
		</li>
	)
}

export default Item