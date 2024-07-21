import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../style';

const Button = ({ content, to }) => {
  return (
    <Link to={to} className="my-3 sm:my-6 w-fit h-fit px-6 py-3 text-center cursor-pointer bg-[#669660] hover:bg-[#99B896] hover:scale-110 duration-500">
      <p className={`${styles.paragraph2} text-white`}>{content}</p>
    </Link>
  )
}

export { Button }
