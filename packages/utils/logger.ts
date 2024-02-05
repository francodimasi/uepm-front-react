/* eslint-disable react-hooks/rules-of-hooks */
import { useMemo, useCallback } from 'react';

export const loggerIntents = {
  ERROR: 'color: #eb445a; font-weight: 700; font-style: italic;',
  INFO: 'color: #3880ff; font-weight: 700; font-style: italic;',
  SUCCESS: 'color: #2dd36f; font-weight: 700; font-style: italic;',
  WARNING: 'color: #ffc409; font-weight: 700; font-style: italic;',
};

/**
 * Customized logger to track errors, warnings, info and success
 * @param title
 * @param message
 * @param styles
 */
export const logger = (
  title = 'Logging',
  message: string | unknown = '',
  styles = loggerIntents.INFO,
): void => {
  if (process.env.NEXT_PUBLIC_ENV === 'development') {
    console.log(`%c${title}`, styles, message);
  }
};

/**
 * Logger component to track context changes for testing.
 * Only works on development environment
 * @param reducer
 * @returns same reducer received
 */
export const ContextLogger = (reducer: any) => {
  if (process.env.NEXT_PUBLIC_ENV === 'production') return reducer;
  const reducerWithLogger = useCallback(
    (state, action) => {
      const nextState = reducer(state, action);
      console.log(
        '%cPrevious State:',
        'color: #ff8000; font-weight: 700;',
        state,
      );
      console.log(
        '%cAction:',
        'color: #00A7F7; font-weight: 700; font-style: italic;',
        action,
      );
      console.log(
        '%c Next State: ',
        'background: #0B5345; color: #ffffff; font-weight: 700; border-radius: 4px;',
        nextState,
      );
      return nextState;
    },
    [reducer],
  );
  return useMemo(() => reducerWithLogger, [reducerWithLogger]);
};
