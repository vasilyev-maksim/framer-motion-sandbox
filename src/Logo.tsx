import { motion } from 'framer-motion';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useToggleState } from './hooks';

const Wrapper = styled(motion.div)`
  background-color: black;
  width: fit-content;
  padding: 15px;
  line-height: 1.4rem;
  font-size: 30px;
  text-align: left;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: start;

  &[data-x='true'] {
    align-items: end;
  }
`;
const Line = styled(motion.div)`
  font-weight: bold;
  padding: 5px;
  letter-spacing: -0.046em;
`;

const Line1 = styled(Line)`
  color: white;
`;
const Line2 = styled(Line)`
  background: linear-gradient(145deg, #72f, #c1b);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  -webkit-text-fill-color: transparent;
  font-size: 0.95em;
`;
const Line3 = styled(Line)`
  background: linear-gradient(145deg, rgba(17, 116, 204, 1) 0%, rgba(34, 255, 72, 1) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  -webkit-text-fill-color: transparent;
  font-size: 0.6em;
`;

export const Logo: React.FC = () => {
  const navigate = useNavigate();
  const { state, setOn, setOff } = useToggleState();
  // const variants = {
  //   hover: { alignItems: 'start' },
  //   rest: { alignItems: 'end' },
  // };

  return (
    <Wrapper
      onHoverStart={setOn}
      onHoverEnd={setOff}
      onClick={() => navigate('/')}
      // variants={variants}
      layout
      data-x={state}
      transition={{ duration: 1, delayChildren: 2 }}
      // animate={{ alignItems: 'start' }}
      // initial={{ alignItems: 'end' }}
    >
      <Line1 layout>Framer</Line1>
      <Line2 layout>Motion</Line2>
      <Line3 layout>Sandbox</Line3>
    </Wrapper>
  );
};
