import React from 'react';
import { Collapse } from 'react-collapse';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

import styles from '../style';

const AccordionItem = ({ header, content, open, toggle }) => {
  return (
    <div>
      <div className={`flex justify-between items-center cursor-pointer ${styles.paragraph1}`} onClick={() => toggle()}>
        <p>{header}</p>
        <div>
          {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>
      <Collapse isOpened={open}>
        <div className="p-3 md:p-6">{content}</div>
      </Collapse>
    </div>
  )
}

export { AccordionItem }
