import React from 'react';
import icon1 from '../assets/SVG_Care_illustration2.svg';
import icon2 from '../assets/SVG_Convenience_illustration2.svg';
import icon3 from '../assets/SVG_Quality_illustration.svg';

import styles from '../style';

const WhyFlowerish = () => {
  return (
    <div className={`flex flex-col justify-center items-center ${styles.padding}`}>
      <h1 className="font-semibold text-[#669660] mb-10 text-[32px] ss:text-[34px] sm:text-[36px] md:text-[38px]">Why Flowerish?</h1>
      <div className="flex flex-col sm:flex-row justify-center items-center mx-10">
        <div className="flext flex-col justify-center items-center w-full px-6">
          <img src={icon1} alt="icon" className="h-36 w-36 mx-auto my-6" />
          <p className={`${styles.paragraph3} text-center`}><span className="font-bold">All the help you need </span>
          We’ll send you a free plant-parenting course and our plant doctors are always on call.</p>
        </div>
        <div className="flext flex-col justify-center items-center w-full px-6">
          <img src={icon2} alt="icon" className="h-36 w-36 mx-auto my-6" />
          <p className={`${styles.paragraph3} text-center`}><span className="font-bold">Delivery to your door </span>
          We’ll bring your plants to your door, anywhere in GB. If you’re not 100% happy, tell us within 30 days and we’ll sort it.</p>
        </div>
        <div className="flext flex-col justify-center items-center w-full px-6">
          <img src={icon3} alt="icon" className="h-36 w-36 mx-auto my-6" />
          <p className={`${styles.paragraph3} text-center`}><span className="font-bold">Unbeatable quality </span>
          We source directly from top-rated growers, so we can sell the finest quality plants at the very best prices.</p>
        </div>
      </div>
    </div>
  )
}

export default WhyFlowerish
