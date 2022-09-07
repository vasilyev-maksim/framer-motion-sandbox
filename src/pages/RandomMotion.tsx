import * as React from 'react';
import { useTitle } from '../hooks';
import { Sun } from '../Sun';

export const RandomMotion: React.FC = () => {
  useTitle('Random motion');

  const t = React.useState(1);
  const x = 100 + (50 + Math.random() * 75) * t[0];
  const y = 100 + (50 + Math.random() * 75) * -(Math.random() > 0.5 ? 1 : -1);

  React.useEffect(() => {
    const i = setInterval(() => t[1](x => x * -1), 1000);
    return () => clearInterval(i);
  }, []);

  return <Sun size={200} animate={{ x, y }} />;
};
