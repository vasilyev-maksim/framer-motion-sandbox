import { useMotionTemplate, useMotionValue, useTransform, useVelocity } from 'framer-motion';
import * as React from 'react';
import { useForceRerender, useInterval, useTitle } from '../hooks';
import { Sun } from '../Sun';
import { DragZone } from '../DragZone';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
`;
const DROPZONE_SIZE = 500;
const SUN_SIZE = 60;
const MAX_DISTANCE = (Math.sqrt(2) * (DROPZONE_SIZE - SUN_SIZE)) / 2;

export const MotionValue: React.FC = () => {
  useTitle('Motion value');

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const distanceFrom0 = useTransform<number, number>([x, y], ([a, b]) => Math.sqrt(a ** 2 + b ** 2));
  const opacity = useTransform(distanceFrom0, [-MAX_DISTANCE, 0, MAX_DISTANCE], [0.2, 1, 0.2]);

  const [, rerender] = useForceRerender();
  useInterval(rerender, 100);

  const onClick = () => {
    x.updateAndNotify(0);
    y.updateAndNotify(0);
  };

  return (
    <Wrapper>
      <div>
        <button onClick={onClick}>Recenter</button>
        <br />
        <br />
        <DragZone width={DROPZONE_SIZE} height={DROPZONE_SIZE}>
          {ref => <Sun drag dragConstraints={ref} size={SUN_SIZE} style={{ x, y, opacity }} />}
        </DragZone>
      </div>
      <div>
        Motion value (100ms lag):
        <pre> {JSON.stringify(distanceFrom0, null, 2)} </pre>
        Distance from center: &nbsp;
        {distanceFrom0.get()}
      </div>
    </Wrapper>
  );
};
