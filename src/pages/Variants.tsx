import { motion } from 'framer-motion';
import * as React from 'react';
import { useTitle } from '../hooks';

export const Variants: React.FC = () => {
  useTitle('Variants');

  const [visible, setVisible] = React.useState(true);

  const list = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
  const item = { hidden: { x: -10, opacity: 0 }, visible: { opacity: 1, x: 0 } };

  return (
    <>
      <button onClick={() => setVisible(x => !x)}> Toggle </button>
      <motion.ul animate={visible ? 'visible' : 'hidden'} variants={list}>
        <motion.li variants={item}>1</motion.li>
        <motion.li variants={item}>2</motion.li>
        <motion.li variants={item}>3</motion.li>
      </motion.ul>
    </>
  );
};
