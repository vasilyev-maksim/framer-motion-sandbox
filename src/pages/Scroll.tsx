import { motion } from 'framer-motion';
import * as React from 'react';
import styled from 'styled-components';
import { useHint, useTitle } from '../hooks';

const Parent = styled.div`
  height: 300px;
  width: 500px;
  overflow: scroll;
  border: 1px dashed grey;
`;

const Child = styled(motion.div)`
  margin-top: 350px;
  padding: 30px;
  text-align: center;
  background-color: #ffcb42;
`;

export const Scroll: React.FC = () => {
  useTitle('Scroll');
  useHint('Scroll down inside the zone');

  return (
    <Parent>
      <Child initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        Becomes visible when scrolling to
      </Child>
    </Parent>
  );
};
