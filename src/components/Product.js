import React from 'react'
import "../styles/Product.css"
import { useStateValue } from './StateProvider'

function Product({id,title,price,imageURL,rating}) {

    const [{basket},dispatch] = useStateValue();
    
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                imageURL: imageURL,
                price: price,
                rating: rating
            }
        });
    }

  return (
    <div className='product'>
        <div className='product__info'>
            <p>{title}</p>
            <p className='product__price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='product__rating'>
                {Array(rating).fill().map((_,i)=>(
                    <p>⭐</p>
                ))}
            </div>
        </div>
        <img src={imageURL} alt="book-img" />
        <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product