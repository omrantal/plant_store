import React, { useState, useEffect } from 'react';
import dropin from 'braintree-web-drop-in';

import axios from 'axios';
import styles from '../style';

import { useAuthContext } from '../hooks/useAuthContext';
import { usePlantsContext } from '../hooks/usePlantsContext';

import { Spinner } from '../components/Spinner';

const Checkout = () => {
  const { plantsInCart, totalPrice, dispatch } = usePlantsContext()
  const { user } = useAuthContext()

  const [showBraintreeDropIn, setShowBraintreeDropIn] = useState(false)
  const [clientToken, setClientToken] = useState(null)
  const [braintreeInstance, setBraintreeInstance] = useState(undefined)
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    if (user) getToken()
  }, [user])

  useEffect(() => {
    if (showBraintreeDropIn) {
      const initializeBraintree = () => dropin.create({
        authorization: clientToken, // insert your tokenization key or client token here
        container: '#braintree-drop-in-div',
      }, (error, instance) => {
        if (error)
          console.log(error)
        else
          setBraintreeInstance(instance)
      })

      if (braintreeInstance) {
        braintreeInstance
          .teardown()
          .then(() => {
            initializeBraintree()
          })
      } else {
        initializeBraintree()
      }
    }
  }, [showBraintreeDropIn])

  const getToken = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/checkout/generate/token')
      setClientToken(response.data.clientToken)
    } catch (err) {
      setError(err)
      console.log(err)
    }
  }

  const onPurchase = () => {
    if (braintreeInstance) {
      braintreeInstance.requestPaymentMethod(
        (err, payload) => {
          if (err) {
            console.log(err);
          } else {
            let paymentMethodNonce = payload.nonce
            let paymentData = {
              payment_method_nonce: paymentMethodNonce,
              amount: totalPrice
            }
            console.log("payment method nonce", payload.nonce)

            // Use paymentMethodNonce to call server and complete the payment
            makePayment(paymentData)
            //alert(`Payment completed with nonce=${paymentMethodNonce}`)
          }
        }
      )
    }
  }

  const makePayment = async (paymentData) => {
    try {
      const response = await axios.post('http://localhost:3000/api/checkout/process/payment', { plantsInCart, paymentData })
      setSuccess(response.data.success)
    } catch (err) {
      console.log(err)
    }
  }

  const emptyCart = () => {
    if (totalPrice !== 0) {
      axios.delete('http://localhost:3000/api/cart', { headers: { Authorization: `Bearer ${user.token}` } })
        .then((response) => {
          dispatch({ type: 'EMPTY_CART' })
        }).catch((err) => {
          console.log(err)
        })
    }
  }

  return (
    <div className={`${styles.padding}`}>
      {clientToken ? (
        <div className="flex justify-center items-center">
          {showBraintreeDropIn ? (
            <div className="flex flex-col justify-center items-center">
              <div id={"braintree-drop-in-div"} />
              <div className="flex justify-between w-full">
                <button
                  className="my-2 w-fit h-fit px-4 py-2 text-center cursor-pointer bg-[#669660] hover:bg-[#99B896] hover:scale-110 duration-300"
                  //disabled={!braintreeInstance}
                  onClick={() => onPurchase()}
                >
                  Pay
                </button>
                <button
                  className="my-2 w-fit h-fit px-4 py-2 text-center cursor-pointer bg-[#669660] hover:bg-[#99B896] hover:scale-110 duration-300"
                  onClick={() => setShowBraintreeDropIn(false)}
                >
                  Get Back
                </button>
              </div>
              {success && <button
                className="my-2 w-fit h-fit px-4 py-2 text-center cursor-pointer bg-[#669660] hover:bg-[#99B896] hover:scale-110 duration-300"
                //disabled={!braintreeInstance}
                onClick={() => emptyCart()}
              >
                Empty the Cart
              </button>}
            </div>
          ) : (
            <button
              className="my-2 w-fit h-fit px-4 py-2 text-center cursor-pointer bg-[#669660] hover:bg-[#99B896] hover:scale-110 duration-300"
              onClick={() => setShowBraintreeDropIn(true)}
            >
              Go to Checkout
            </button>
          )}
        </div>
      ) : <Spinner height="200px" />}
    </div>
  )
}

export { Checkout }
