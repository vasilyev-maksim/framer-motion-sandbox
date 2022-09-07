import * as React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Logo } from './Logo';

const StyledLayout = styled.div`
  padding: 10px;
  display: flex;
  gap: 40px;
  align-items: start;
  padding: 0;
`;
const Header = styled.header`
  margin-bottom: 20px;
`;
const Title = styled.h2`
  background: linear-gradient(145deg, #72f, #c1b);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  -webkit-text-fill-color: transparent;
  font-size: 35px;
  width: fit-content;
`;
const Hint = styled.i``;

export const Layout: React.FC = () => {
  const [title, setTitle] = React.useState();
  const [hint, setHint] = React.useState();

  return (
    <StyledLayout>
      <Logo />
      <section style={{ flexGrow: 1 }}>
        <Header>
          <Title>{title}</Title>
          <Hint>{hint}</Hint>
        </Header>
        <Outlet context={{ setTitle, setHint }} />
      </section>
    </StyledLayout>
  );
};
