import { motion } from 'framer-motion';
import * as React from 'react';
import styled from 'styled-components';
import { useTitle, useToggleState } from '../hooks';

const Parent = styled(motion.div)`
  height: 300px;
  width: 300px;
  border: 1px dashed grey;
  display: flex;
  align-items: center;
`;

const Child = styled(motion.div)`
  text-align: center;
  background-color: #ffcb42;
`;

export const LayoutAnimation: React.FC = () => {
  useTitle('Layout animation');

  const variants = {
    square: {
      justifyContent: 'flex-start',
    },
    circle: {
      justifyContent: 'center',
      borderRadius: '50%',
    },
  };
  const { toggle, state } = useToggleState();

  return (
    <>
      <button onClick={toggle}>toggle</button>
      <Parent variants={variants} layout animate={state ? 'square' : 'circle'}>
        <Child layout>CHILD</Child>
      </Parent>

      <p>
        <i>Scroll down inside the zone</i>
      </p>
    </>
  );
};
