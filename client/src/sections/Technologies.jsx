import React from 'react';
import react_image from '../assets/React-icon1.png';
import tailwindcss_image from '../assets/Tailwind_CSS1.png';

import styles from '../style';

const Technologies = () => {
  return (
    <section id="Technologies" className={`${styles.padding}`}>
      <h1 className="font-semibold text-center text-[32px] ss:text-[34px] sm:text-[36px] md:text-[38px] mb-6 mx-auto">Technologies Used to build this Website</h1>
      <div className="flex flex-col sm:flex-row justify-center items-start">
        <div className="flex-1 flex flex-col justify-start items-center mx-6">
          <div className="w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] my-1 sm:my-3">
            <img src={react_image} alt="react_image" className="w-full" />
          </div>
          <div>
            <h1 className={styles.heading}>React js</h1>
            <p className={`${styles.paragraph3} mb-1`}>React is a free and open-source front-end JavaScript library for building user interfaces based on components.</p>
            <p className={`${styles.paragraph3} mb-1`}>It can be used as a base in the development of single-page, mobile, or server-rendered applications with frameworks like Next.js.</p>
            <p className={styles.paragraph3}>However, it is only concerned with the user interface and rendering components to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality</p>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-start items-center mx-6">
          <div className="w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] my-1 sm:my-3">
            <img src={tailwindcss_image} alt="react_image" className="w-full" />
          </div>
          <div>
            <h1 className={styles.heading}>Tailwind CSS</h1>
            <p className={`${styles.paragraph3} mb-1`}>Tailwind CSS is an open source CSS framework.</p>
            <p className={`${styles.paragraph3} mb-1`}>The main feature of this library is that, unlike other CSS frameworks like Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables.</p>
            <p className={styles.paragraph3}>Instead, it creates a list of "utility" CSS classes that can be used to style each element by mixing and matching.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Technologies
