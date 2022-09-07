import * as React from 'react';
import { NavLink } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <>
      <h3>Examples: </h3>
      <ul>
        <li>
          <NavLink to='/random-motion'>Random motion</NavLink>
        </li>
        <li>
          <NavLink to='/drag'>Drag</NavLink>
        </li>
        <li>
          <NavLink to='/variants'>Variants</NavLink>
        </li>
        <li>
          <NavLink to='/scroll'>Scroll</NavLink>
        </li>
        <li>
          <NavLink to='/test'>__T E S T__</NavLink>
        </li>
        <li>
          <NavLink to='/copy-button'>Copy button</NavLink>
        </li>
        <li>
          <NavLink to='/text-color'>Text color animation</NavLink>
        </li>
        <li>
          <NavLink to='/waving-hand'>Waving hand</NavLink>
        </li>
        <li>
          <NavLink to='/glow-effect'>Glow effect</NavLink>
        </li>
        <li>
          <NavLink to='/exit'>Exit animation</NavLink>
        </li>
        <li>
          <NavLink to='/motion-value'>Motion value</NavLink>
        </li>
        <li>
          <NavLink to='/shared-layout'>Shared layout</NavLink>
        </li>
        <li>
          <NavLink to='/layout-animation'>Layout animation</NavLink>
        </li>
      </ul>

      <h3>Articles: </h3>
      <ul>
        <li>
          <a
            target='_blank'
            href='https://blog.maximeheckel.com/posts/guide-animations-spark-joy-framer-motion/'
            rel='noreferrer'>
            Guide to creating animations that spark joy with Framer Motion
          </a>
        </li>
        <li>
          <a
            target='_blank'
            href='https://blog.maximeheckel.com/posts/framer-motion-layout-animations/'
            rel='noreferrer'>
            Everything about Framer Motion layout animations
          </a>
        </li>
        <li>
          <a
            target='_blank'
            href='https://blog.maximeheckel.com/posts/advanced-animation-patterns-with-framer-motion/'
            rel='noreferrer'>
            Advanced animation patterns with Framer Motion
          </a>
        </li>
      </ul>
    </>
  );
};
