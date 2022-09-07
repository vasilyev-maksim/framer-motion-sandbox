import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useTitle } from '../hooks';

const Wrapper = styled(motion.div)`
  position: relative;
  width: 300px;
  height: 120px;
`;

const Glow = styled(motion.div)`
  background: linear-gradient(90deg, #ffa0ae 0%, #aacaef 75%);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -webkit-filter: blur(15px);
  filter: blur(15px);
  border-radius: 16px;
`;

const Card = styled(motion.div)`
  border-radius: 16px;
  margin-bottom: 0px;
  overflow: hidden;
  position: relative;
  background: rgba(255, 255, 255, 0.65);
  position: relative;
  padding: 36px 24px;
  height: 100%;

  div {
    color: #4a4a4c;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
  }
`;

export const CardWithGlow = () => {
  useTitle('Glow effect');

  const cardVariants = {
    hover: {
      scale: 1.05,
    },
    initial: {
      scale: 1,
    },
  };

  const glowVariants = {
    hover: {
      opacity: 0.8,
    },
    initial: {
      scale: 1.05,
      opacity: 0,
    },
  };

  return (
    <div style={{ backgroundColor: '#4e4e4e', padding: 50, paddingBottom: 0, cursor: 'pointer', width: 300 }}>
      <Wrapper initial='initial' whileHover='hover'>
        <Glow
          variants={glowVariants}
          transition={{
            ease: 'easeOut',
            delay: 0.15,
          }}
        />
        <Card
          variants={cardVariants}
          transition={{
            ease: 'easeOut',
            delay: 0.15,
            duration: 0.5,
          }}>
          <div>✨ Hover me ✨</div>
        </Card>
      </Wrapper>
    </div>
  );
};
