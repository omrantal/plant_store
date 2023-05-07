import React, { useEffect, useState } from 'react';

import axios from 'axios';
import styles from '../style';

import { CartCard } from '../components/CartCard';
import { Button } from '../components/Button';
import { Spinner } from '../components/Spinner';

import { useAuthContext } from '../hooks/useAuthContext';
import { usePlantsContext } from '../hooks/usePlantsContext';

const Cart = () => {
  const { plantsInCart, totalPrice, dispatch } = usePlantsContext()
  const { user } = useAuthContext()
  const [getLoading, setGetLoading] = useState(true)

  useEffect(() => {
    dispatch({ type: 'OPEN_CART' })
  }, [])

  useEffect(() => {
    const getPlantsFromCart = async () => {
      await axios.get('http://localhost:3000/api/cart', { headers: { Authorization: `Bearer ${user.token}` } })
        .then((response) => {
          dispatch({ type: 'GET_FROM_CART', payload: response.data })
          setGetLoading(false)
        }).catch((error) => {
          console.error(error)
        })
    }

    if (user) {
      getPlantsFromCart()
    }
  }, [dispatch, user])

  if (!user) {
    return (
      <section className={`${styles.padding}`}>
        <div className="flex flex-col justify-center items-center h-[300px]">
          <h1 className={`${styles.headinglg}`}>You are not Signed in</h1>
          <h2 className={`${styles.paragraph2}`}>Signup to shop from store</h2>
          <Button to="/signup" content="Signup" />
        </div>
      </section>
    )
  }

  return (
    <section className={`${styles.padding}`}>
      {getLoading ? (
        <Spinner height="300px" />
      ) : (
        totalPrice === 0 ? (
          <div className="flex flex-col justify-center items-center h-[300px]">
            <h1 className={`${styles.headinglg}`}>Cart is Empty</h1>
            <h2 className={`${styles.paragraph2}`}>Add Plants from Store</h2>
            <Button to="/store" content="Shop Now" />
          </div>
        ) : (
          <div className="min-h-[300px]">
            <div className="text-center">
              <h1 className={`${styles.heading} mb-6 text-center`}>Your choosen Plants</h1>
            </div>
            <div className="flex flex-col sm:flex-row">
              <div className="flex-[80%] grid grid-cols-1 ss:grid-cols-2 lg:grid-cols-3 place-items-center content-center order-2 sm:order-1 mt-0 sm:mt-10">
                {plantsInCart.map((plant) => (
                  <CartCard key={plant._id} plant={plant} />
                ))}
              </div>
              <div className="flex-[20%] flex flex-col justify-center items-center order-1 sm:order-2 p-6">
                <h1 className={`${styles.heading} text-center`}>Total Price</h1>
                <h1 className={`${styles.heading} text-center`}>{totalPrice}</h1>
              </div>
            </div>
          </div>
        ))}
    </section>
  )
}

export default Cart
