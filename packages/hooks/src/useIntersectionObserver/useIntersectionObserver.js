/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { observe, unobserve } from './intersection';

const initialState = {
  inView: false,
  entry: undefined
};

export function useInView (options = {}) {
  const ref = React.useRef();
  const [state, setState] = React.useState(initialState);

  const setRef = React.useCallback(
    node => {
      if (ref.current) {
        unobserve(ref.current);

        if (!options.triggerOnce) {
          // Reset the state, unless the hook is set to only `triggerOnce`
          // In that case, resetting the state would trigger another update.
          setState(initialState);
        }
      }
      if (node) {
        observe(
          node,
          (inView, intersection) => {
            setState({ inView, entry: intersection });

            if (inView && options.triggerOnce) {
              // If it should only trigger once, unobserve the element after it's inView
              unobserve(node);
            }
          },
          options
        );
      }

      // Store a reference to the node
      ref.current = node;
    },
    [options.threshold, options.root, options.rootMargin, options.triggerOnce]
  );

  return [setRef, state.inView, state.entry];
}
