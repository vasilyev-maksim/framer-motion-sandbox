import * as React from 'react';
import { Sun } from '../Sun';
import { DragZone } from '../DragZone';
import { useTitle } from '../hooks';

export const Drag: React.FC = () => {
  useTitle('Drag');

  return (
    <DragZone width={500} height={350}>
      {ref => <Sun size={100} whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.1 }} drag dragConstraints={ref} />}
    </DragZone>
  );
};
