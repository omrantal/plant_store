require('dotenv').config()
const braintree = require("braintree")

const gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox,
  merchantId: process.env.MERCHANT_ID,
  publicKey: process.env.PUBLIC_KEY,
  privateKey: process.env.PRIVATE_KEY
})

exports.generateToken = (req, res) => {
  gateway.clientToken.generate({}).then((response) => {
    res.status(200).send(response)
  }).catch((err) => {
    res.status(500).send(err)
  })
}

exports.processPayment = (req, res) => {
  const { paymentData } = req.body
  //const deviceDataFromTheClient = plantsInCart
  const nonceFromTheClient = paymentData.payment_method_nonce
  const { amount } = paymentData
  gateway.transaction.sale({
    amount: amount,
    paymentMethodNonce: nonceFromTheClient,
    //deviceData: deviceDataFromTheClient,
    options: {
      submitForSettlement: true
    }
  }).then((response) => res.status(200).send(response))
  .catch((err) => res.status(500).send(err))
}