import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTime,
  useTransform,
  useVelocity,
} from 'framer-motion';
import * as React from 'react';
import styled from 'styled-components';
import { DragZone } from '../DragZone';
import { useForceRerender, useHint, useInterval, useTitle } from '../hooks';

const Child = styled(motion.div)<IData>`
  width: ${props => props.w}%;
  height: ${props => props.h}%;
  position: absolute;
  top: ${props => props.y}%;
  left: ${props => props.x}%;
  border-radius: 5px;
  background-color: #ccc;
  cursor: pointer;
`;

const Highlight = styled(motion.div)`
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  border: 1px dashed blue;
  position: relative;
  top: -3px;
  left: -3px;
  border-radius: 5px;
`;

interface IData {
  x: number;
  y: number;
  w: number;
  h: number;
}

const data: IData[] = [
  { x: 10, y: 45, w: 10, h: 35 },
  { x: 25, y: 10, w: 30, h: 25 },
  { x: 65, y: 55, w: 20, h: 30 },
];

export const SharedLayout: React.FC = () => {
  useTitle('Shared layout');
  useHint('Click on and drag grey rectangles');

  const [selected, setSelected] = React.useState<number | null>(null);

  return (
    <>
      <DragZone width={600} height={400}>
        {ref =>
          data.map((item, i) => (
            <Child drag dragConstraints={ref} {...item} key={i} onClick={() => setSelected(i)}>
              {selected === i && <Highlight layoutId='highlight' />}
            </Child>
          ))
        }
      </DragZone>
    </>
  );
};
