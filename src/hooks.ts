import React, { useEffect, useRef } from 'react';
import { useOutletContext } from 'react-router-dom';

export function useToggleState(initialValue = false) {
  const [state, setState] = React.useState(initialValue);

  return {
    state,
    setOn: React.useCallback(() => setState(true), []),
    setOff: React.useCallback(() => setState(false), []),
    toggle: React.useCallback(() => setState(x => !x), []),
  };
}

export function useForceRerender() {
  const { state, toggle } = useToggleState();
  return [state, toggle] as const;
}

export const useInterval = (callback: Function, delay?: number | null) => {
  const savedCallback = useRef<Function>(() => {});

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    if (delay !== null) {
      const interval = setInterval(() => savedCallback.current(), delay || 0);
      return () => clearInterval(interval);
    }

    return undefined;
  }, [delay]);
};

function useOutletCtx() {
  return useOutletContext<{ setTitle: (x: string) => void; setHint: (x: string) => void }>();
}

export function useTitle(title: string) {
  const { setTitle } = useOutletCtx();
  React.useEffect(() => {
    setTitle(title);
    return () => setTitle('');
  }, []);
}

export function useHint(title: string) {
  const { setHint } = useOutletCtx();
  React.useEffect(() => {
    setHint(title);
    return () => setHint('');
  }, []);
}
