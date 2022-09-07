import { AnimatePresence } from 'framer-motion';
import * as React from 'react';
import styled from 'styled-components';
import { useTitle } from '../hooks';
import { Sun } from '../Sun';

const Wrapper = styled.div`
  display: flex;
  padding: 40px;
  gap: 10px;
`;

export const ExitAnimation: React.FC = () => {
  useTitle('Exit animation');

  const variants = {
    initial: { scale: 0, y: '50%' },
    animate: { scale: 1, y: 0 },
    exit: { scale: 0, transition: { duration: 0.3 } },
  };

  const [size, setSize] = React.useState(1);
  return (
    <>
      <button onClick={() => setSize(x => x + 1)}> +1 </button>
      <button onClick={() => setSize(x => x - 1)}> -1 </button>
      <Wrapper>
        <AnimatePresence>
          {Array.from({ length: size }, (x, i) => (
            <Sun variants={variants} initial='initial' animate='animate' exit='exit' size={50} key={i} />
          ))}
        </AnimatePresence>
      </Wrapper>
    </>
  );
};
