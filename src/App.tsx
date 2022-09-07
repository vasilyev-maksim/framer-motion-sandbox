import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { Home } from './Home';
import { RandomMotion } from './pages/RandomMotion';
import { Drag } from './pages/Drag';
import { Variants } from './pages/Variants';
import { Scroll } from './pages/Scroll';
import { createGlobalStyle } from 'styled-components';
import { LayoutAnimation } from './pages/LayoutAnimation';
import { CopyToClipboardButton } from './pages/CopyButton';
import { TextColor } from './pages/TextColor';
import { WavingHand } from './pages/WavingHand';
import { CardWithGlow } from './pages/GlowEffect';
import { ExitAnimation } from './pages/ExitAnimation';
import { MotionValue } from './pages/MotionValue';
import { SharedLayout } from './pages/SharedLayout';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: GT Walsheim, Helvetica Neue, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-feature-settings: 'liga', 'clig';
    font-variant-ligatures: common-ligatures;
    padding: 0;
    margin: 0;
    min-height: 100vh;
  }

  ul > li {
    line-height: 1.7em;
  }

  a {
    text-decoration: none;
  }
`;

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='random-motion' element={<RandomMotion />}></Route>
            <Route path='drag' element={<Drag />}></Route>
            <Route path='variants' element={<Variants />}></Route>
            <Route path='scroll' element={<Scroll />}></Route>
            <Route path='test' element={<LayoutAnimation />}></Route>
            <Route path='copy-button' element={<CopyToClipboardButton />}></Route>
            <Route path='text-color' element={<TextColor />}></Route>
            <Route path='waving-hand' element={<WavingHand />}></Route>
            <Route path='glow-effect' element={<CardWithGlow />}></Route>
            <Route path='exit' element={<ExitAnimation />}></Route>
            <Route path='motion-value' element={<MotionValue />}></Route>
            <Route path='shared-layout' element={<SharedLayout />}></Route>
            <Route path='layout-animation' element={<LayoutAnimation />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
