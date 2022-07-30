import React from 'react'
import "../styles/Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from "./Subtotal";

function Checkout() {

  const [{basket, user}, dispatch] = useStateValue();

  return (
    <div className='checkout'>
        <div className='checkout__left'>
            <img src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' className="checkout__ad" alt="advert" />

            <div>
                <h3>Hello, {user?.email}</h3>
                <h2 className='checkout__title'>Your Shopping Basket</h2>
                {basket.map(item => (
                  <CheckoutProduct 
                    id= {item.id}
                    title= {item.title}
                    imageURL = {item.imageURL}
                    price= {item.price}
                    rating= {item.rating}
                  />
                ))}
            </div>
        </div>

        <div className='checkout__right'>
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout