import { useRef } from 'react';
import styled from 'styled-components';

export const Zone = styled.div<{ height: number; width: number }>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  border: 1px dashed grey;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const DragZone: React.FC<
  React.ComponentProps<typeof Zone> & {
    children: (ref: React.RefObject<HTMLDivElement>) => React.ReactNode;
    height: number;
    width: number;
  }
> = ({ children, height, width, ...rest }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Zone {...rest} height={height} width={width} ref={ref}>
      {children(ref)}
    </Zone>
  );
};
