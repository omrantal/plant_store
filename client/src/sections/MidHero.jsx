import React from 'react';
import hero_section from '../assets/GlobalGreen_30-40cm_Situ_RT_CROP-min.jpg';

import styles from '../style';

import { Button } from '../components/Button';

const MidHero = () => {
  return (
    <section className={`flex flex-col ss:flex-row ${styles.padding}`}>
      <div className="flex-1 flex flex-col justify-center m-6 sm:m-9">
        <h1 className={`${styles.heading} text-[#669660] mb-6`}>(Almost) unkillable houseplants</h1>
        <p className={`${styles.paragraph2}`}>We know what it’s like to be guilty of plant murder, we've pulled together a collection of plants who are low maintenance enough to forgive you for the odd missed watering.</p>
        <Button to="/store" content="Shop Now" />
      </div>
      <div className="flex-1">
        <img src={hero_section} alt="hero_section" className='object-cover w-full h-screen' />
      </div>
    </section>
  )
}

export default MidHero
