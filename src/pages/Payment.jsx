import React, { useEffect } from 'react';
import KhaltiCheckout from 'khalti-checkout-web';
import Layout from '../components/Layout';

const Payment = () => {
  // Initialize Khalti Checkout
  const config = {
    publicKey: 'test_public_key_dc74e0fd57cb46cd93832aee0a390234',
    productIdentity: '1234567890',
    productName: 'Drogon',
    productUrl: 'http://gameofthrones.com/buy/Dragons',
    eventHandler: {
      onSuccess(payload) {
        // hit merchant api for initiating verification
        console.log(payload);
      },
      onError(error) {
        // handle errors
        console.log(error);
      },
      onClose() {
        console.log('widget is closing');
      },
    },
    paymentPreference: ['KHALTI'],
  };

  // Create a new instance of KhaltiCheckout with the configuration
  const checkout = new KhaltiCheckout(config);

  useEffect(() => {
    // Event listener for the payment button
    const btn = document.getElementById('payment-button');

    // Handle button click
    const handleClick = () => {
      // Minimum transaction amount must be 10, i.e 1000 in paisa.
      checkout.show({ amount: 1000 });
    };

    // Attach click event listener to the button
    btn.addEventListener('click', handleClick);

    // Cleanup function to remove event listener
    return () => {
      btn.removeEventListener('click', handleClick);
    };
  }, [checkout]);

  //   Esewa
  const initiatePayment = () => {
    const path = 'https://uat.esewa.com.np/epay/main';
    const params = {
      amt: 100,
      psc: 0,
      pdc: 0,
      txAmt: 0,
      tAmt: 100,
      pid: 'ee2c3ca1-696b-4cc5-a6be-2c40d929d453',
      scd: 'EPAYTEST',
      su: 'http://merchant.com.np/page/esewa_payment_success',
      fu: 'http://merchant.com.np/page/esewa_payment_failed',
    };

    post(path, params);
  };

  const verifyPayment = () => {
    const path = 'https://uat.esewa.com.np/epay/transrec';
    const params = {
      amt: 100,
      rid: '000AE01',
      pid: 'ee2c3ca1-696b-4cc5-a6be-2c40d929d453',
      scd: 'EPAYTEST',
    };

    post(path, params);
  };

  const post = (path, params) => {
    const form = document.createElement('form');
    form.setAttribute('method', 'POST');
    form.setAttribute('action', path);
    form.setAttribute('target', '_blank'); // Open in a new tab

    for (const key in params) {
      const hiddenField = document.createElement('input');
      hiddenField.setAttribute('type', 'hidden');
      hiddenField.setAttribute('name', key);
      hiddenField.setAttribute('value', params[key]);
      form.appendChild(hiddenField);
    }

    document.body.appendChild(form);
    form.submit();
  };

  return (
    <Layout>
      <div className="mt-32">
        <h1 className="text-4xl font-bold text-center mb-10 text-yellowColor-0">
          Payment
        </h1>
        <div>
          <h2 className="text-2xl font-semibold text-center">
            Select Payment Method
          </h2>
          <div className="flex flex-col md:flex-row items-center h-[50vh] md:h-[40vh] justify-center gap-x-10">
            <img
              src="/assets/khalti.png"
              className="w-2/3 md:w-1/3 lg:w-1/5 cursor-pointer"
              alt=""
              id="payment-button"
            />
            <img
              src="/assets/essewa.png"
              className="w-2/3 md:w-1/3 lg:w-1/5 cursor-pointer"
              alt=""
              onClick={initiatePayment}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Payment;
