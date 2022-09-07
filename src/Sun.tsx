import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Sun = styled(motion.div)<{ size: number }>`
  background-color: #ffb200;
  border: 10px solid #ffcb42;
  border-radius: 50%;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  padding: 10px;
  box-sizing: border-box;
`;
