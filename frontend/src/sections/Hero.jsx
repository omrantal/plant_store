import React from 'react';
import { CiDiscount1 } from 'react-icons/ci';

import styles from '../style';

import { Button } from '../components/Button';

const Hero = () => {
  return (
    <section id="Home" className={`flex flex-col h-full bg-hero-pattern bg-cover bg-center ${styles.padding}`}>
      <div className="w-[60%] flex flex-row items-center">
        <CiDiscount1 color="#669660" className="w-[34px] h-[34px] shrink-0" />
        <p className={`${styles.paragraph2} text-[#669660] ml-2`}>20% Discount For One Month Account</p>
      </div>

      <div className="w-[60%] flex flex-col mt-3 sm:mt-6">
        <h1 className={`${styles.headinglg} text-[#669660]`}>Decorate your home with plants</h1>
        <p className={`${styles.paragraph1}`}>A beautiful plant is like having a friend around the house</p>

        <div className="w-[80%] mt-3 sm:mt-6">
          <p className={`${styles.paragraph3}`}>Transform any space and bring your home to life with plants. Tiny plants like
            <span className="text-[#669660]"> Suri </span> and <span className="text-[#669660]"> Wallace </span>
            can add a pop of colour to dark nooks, while <span className="text-[#669660]"> Pele </span>
            ,<span className="text-[#669660]"> Rob </span>and <span className="text-[#669660]"> Zey </span>will happily sit on a coffee table or a counter top.</p>
          <p className={`${styles.paragraph3}`}>For an instant jungle hit, choose a big plant with large, glossy leaves - like
            <span className="text-[#669660]"> Nicolau </span>, <span className="text-[#669660]"> Ariel </span>
            or <span className="text-[#669660]"> Robin </span>.</p>
        </div>

        <Button to="/store" content="Shop Now" />
      </div>
    </section>
  )
}

export default Hero
