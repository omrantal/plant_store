import React from 'react';

import styles from '../style';

const link = `${styles.paragraph3} cursor-pointer hover:underline`;

const Footer = () => {
  return (
    <section id="Contact" className={`bg-gradient-to-r from-[#669660] to-[#99B896] ${styles.padding}`}>
      <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start p-16 text-white text-center sm:text-left">
        <div className="mt-6 sm:mt-0 mx-6 leading-8 order-2 sm:order-1">
          <h5 className={`${styles.paragraph3} font-semibold`}>About</h5>
          <ul className="list-none">
            <li className={`${link}`}>About Flowerish</li>
            <li className={`${link}`}>Plant Care</li>
            <li className={`${link}`}>FAQ</li>
            <li className={`${link}`}>Contact</li>
            <li className={`${link}`}>Careers</li>
            <li className={`${link}`}>Impact at Flowerish</li>
          </ul>
        </div>
        <div className="mx-10 text-center leading-8 order-1 sm:order-2">
          <h5 className={`${styles.paragraph3} font-semibold`}>Join Flowerish</h5>
          <h6 className={`${styles.paragraph3}`}>Sign up for our free video course and urban garden inspiration</h6>
          <input type="text" className="text-black m-4 p-4 w-[300px]" placeholder="Email address" /><br />
          <button type="button" className="mb-6 bg-[#669660] hover:bg-[#99B896] hover:scale-110 duration-300 text-[14px] sm:text-[16px] p-2 w-40">Sign in</button>
        </div>
        <div className="mt-6 sm:mt-0 mx-6 leading-8 order-3">
          <h5 className={`${styles.paragraph3} font-semibold`}>Terms</h5>
          <ul className="list-none">
            <li className={`${link}`}>Terms of Service</li>
            <li className={`${link}`}>Privacy Policy</li>
            <li className={`${link}`}>Returns and Delivery</li>
            <li className={`${link}`}>Cookies</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Footer
