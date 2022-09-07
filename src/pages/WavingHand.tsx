import { motion } from 'framer-motion';
import { useTitle } from '../hooks';

export const WavingHand = () => {
  useTitle('Waving hand');

  return (
    <h1>
      Hi{' '}
      <motion.div
        style={{
          marginBottom: '-20px',
          marginRight: '-45px',
          paddingBottom: '20px',
          paddingRight: '45px',
          display: 'inline-block',
        }}
        animate={{ rotate: 20 }}
        transition={{
          repeat: Infinity,
          repeatType: 'mirror',
          from: 0,
          duration: 0.2,
          ease: 'easeInOut',
          type: 'tween',
        }}>
        👋
      </motion.div>
    </h1>
  );
};
