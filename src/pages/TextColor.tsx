import { motion } from 'framer-motion';
import * as React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { githubGist as theme } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useTitle } from '../hooks';

export const TextColor: React.FC = () => {
  useTitle('Text color animation');

  return (
    <>
      <motion.h1 initial={{ color: '#4517cf' }} whileHover={{ color: '#d91e8e', cursor: 'pointer' }}>
        Hover me! (animated correctly)
      </motion.h1>
      <SyntaxHighlighter showLineNumbers language='javascript' style={theme}>
        {`<motion.h1 initial={{ color: '#4517cf' }} whileHover={{ color: '#d91e8e', cursor: 'pointer' }}>
  Hover me! (animated correctly)
</motion.h1>`}
      </SyntaxHighlighter>
      <br />
      <motion.h1 initial={{ color: 'blue' }} whileHover={{ color: 'red', cursor: 'pointer' }}>
        Hover me! (no animation)
      </motion.h1>
      <SyntaxHighlighter showLineNumbers language='javascript' style={theme}>
        {`<motion.h1 initial={{ color: 'blue' }} whileHover={{ color: 'red', cursor: 'pointer' }}>
  Hover me! (no animation)
</motion.h1>`}
      </SyntaxHighlighter>
    </>
  );
};
