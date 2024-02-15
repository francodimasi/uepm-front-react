'use client';

import React from 'react';
import useTailwindBreakpoints from '../ui/hooks/useTailwindBreakpoints';

export const Breakpoints = () => {
  const { currentBreakpoint } = useTailwindBreakpoints();
  return (
    <div className="fixed bottom-10 left-10 bg-primary z-50 p-2 rounded-full">
      <span>
        The current breakpint is: <b>{currentBreakpoint}</b>
      </span>
    </div>
  );
};
