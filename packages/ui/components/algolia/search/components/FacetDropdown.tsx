import { RefObject, useCallback, useEffect, useRef, useState } from 'react';
import { useCurrentRefinements } from 'react-instantsearch';
import type { CurrentRefinementsRenderState } from 'instantsearch.js/es/connectors/current-refinements/connectCurrentRefinements';
import { twMerge } from 'tailwind-merge';
import { DropdownProps } from './FacetDropdown.types';

function useCloseDropdown<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: () => void,
  enabled: boolean = true,
) {
  useEffect(() => {
    if (!enabled) return;

    const handleMouseDown = (event: MouseEvent | TouchEvent) => {
      if (!ref.current?.contains(event.target as Node)) {
        handler();
      }
    };

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        handler();
      }
    }

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [ref, handler, enabled]);
}

function getAttributeRefinements(
  attribute: string,
  items: CurrentRefinementsRenderState['items'],
) {
  const item = items.find((item) => item.attribute === attribute);
  return item?.refinements || [];
}

export function FacetDropdown({
  facetAttribute,
  facetText,
  children,
}: DropdownProps) {
  const [isOpened, setIsOpened] = useState(false);
  const panelRef = useRef(null);
  const { items } = useCurrentRefinements(
    {},
    { $$widgetType: 'cmty.facetDropdown' },
  );

  // Close the dropdown when click outside or press the Escape key
  const close = useCallback(() => setIsOpened(false), []);
  useCloseDropdown(panelRef, close, isOpened);
  const refinements =
    facetAttribute && getAttributeRefinements(facetAttribute, items);
  return (
    <div
      className={twMerge(
        'ais-Panel ',
        'ais-Dropdown',
        isOpened && 'ais-Dropdown--opened',
      )}
      ref={panelRef}
    >
      <div className="mb-0">
        <a
          className="cursor-pointer font-medium text-sm text-primary-dark underline"
          onClick={() => setIsOpened((opened) => !opened)}
        >
          {`${facetText} (${refinements && refinements.length})`}
        </a>
      </div>
      <div
        className={twMerge(
          'z-[10000] absolute border-1  font-["DMSans"] border-gray-medium rounded-lg p-3 bg-light',
          isOpened ? 'block' : 'hidden',
        )}
      >
        {children}
      </div>
    </div>
  );
}
