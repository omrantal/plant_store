import React from 'react';
import { BsWhatsapp, BsTruck, BsBagCheck, BsHandThumbsUp } from 'react-icons/bs';

import styles from '../style';

const Help = () => {
  return (
    <section className={`flex flex-col lg:flex-row justify-center items-start ${styles.padding}`}>
      <div className="flex-1 flex flex-col ss:flex-row justify-center items-center ss:items-start m-3">
        <div className="flex-1 flex flex-col sm:flex-row items-center sm:items-start">
          <BsWhatsapp className="shrink-0 w-10 h-10" color='#669660' />
          <div className="flex flex-col items-center sm:items-start py-6 px-2 sm:px-6 sm:py-0">
            <h1 className={`${styles.paragraph2} font-semibold mb-2`}>Help</h1>
            <div className={`${styles.paragraph3}`}>
              <p>Need to get in touch?</p>
              <p>Just use the help widget to send a message to the team.</p>
              <p>Customer service opening hours:</p>
              <p>Monday to Sunday 9am-8pm</p>
              <p>Live chat is available 10am-5pm Monday to Sunday</p>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col sm:flex-row items-center sm:items-start">
          <BsBagCheck className="shrink-0 w-10 h-10" color='#669660' />
          <div className="flex flex-col items-center sm:items-start py-6 px-2 sm:px-6 sm:py-0">
            <h1 className={`${styles.paragraph2} font-semibold mb-2`}>Security</h1>
            <div className={`${styles.paragraph3}`}>
              <p>Secure payment - our systems are protected with bank-grade security. Your payment is safe with us.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col ss:flex-row justify-center items-center ss:items-start m-3">
        <div className="flex-1 flex flex-col sm:flex-row items-center sm:items-start">
          <BsTruck className="shrink-0 w-10 h-10" color='#669660' />
          <div className="flex flex-col items-center sm:items-start py-6 px-2 sm:px-6 sm:py-0">
            <h1 className={`${styles.paragraph2} font-semibold mb-2`}>Quality</h1>
            <div className={`${styles.paragraph3}`}>
              <p>We work directly with over 40 specialist growers to bring you the best quality plants</p>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col sm:flex-row items-center sm:items-start">
          <BsHandThumbsUp className="shrink-0 w-10 h-10" color='#669660' />
          <div className="flex flex-col items-center sm:items-start py-6 px-2 sm:px-6 sm:py-0">
            <h1 className={`${styles.paragraph2} font-semibold mb-2`}>Flowerish Promise</h1>
            <div className={`${styles.paragraph3}`}>
              <p>If you need advice, just get in touch - we’ll be your personal plant gurus as long as you need us. If something’s up, tell us within 30 days of delivery — we’ll sort it.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Help
