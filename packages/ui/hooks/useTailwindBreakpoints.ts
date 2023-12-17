'use client';

import { useState, useEffect, useMemo } from 'react';
import { MEDIA_BREAKPOINTS } from '../constants';

const useTailwindBreakpoints = (): {
  currentBreakpoint: string;
  isMobile: boolean;
} => {
  const [currentBreakpoint, setCurrentBreakpoint] = useState<string>('sm');

  const isMobile = useMemo(() => {
    return currentBreakpoint === 'xs' || currentBreakpoint === 'sm';
  }, [currentBreakpoint]);

  useEffect(() => {
    const updateBreakpoint = () => {
      for (const breakpoint in MEDIA_BREAKPOINTS) {
        if (window.matchMedia(MEDIA_BREAKPOINTS[breakpoint]).matches) {
          setCurrentBreakpoint(breakpoint);
          break;
        }
      }
    };

    updateBreakpoint();

    window.addEventListener('resize', updateBreakpoint);

    return () => {
      window.removeEventListener('resize', updateBreakpoint);
    };
  }, []);

  return { currentBreakpoint, isMobile };
};

export default useTailwindBreakpoints;
