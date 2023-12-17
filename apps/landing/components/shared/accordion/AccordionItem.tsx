import classNames from 'classnames';
import { TabItem } from '../tabs/tabs.type';
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';

type AccordionItemProps = {
  selected: boolean;
  item: TabItem;
  onSelect: () => void;
};
export const AccordionItem = ({
  item,
  onSelect,
  selected,
}: AccordionItemProps) => {
  const { name, content } = item;
  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const selectedClasses = useMemo(() => {
    return classNames('overflow-hidden', {
      'max-h-[0px]': !selected && height > 0,
    });
  }, [height, selected]);

  const loadElementHeight = () => {
    console.log('height', height);
    setHeight(ref.current?.clientHeight ?? 0);
  };

  useEffect(() => {
    if (!!ref.current?.clientHeight && ref.current?.clientHeight > 0) {
      setTimeout(() => {
        loadElementHeight();
      }, 100);
    }
  }, [ref.current?.clientHeight]);

  return (
    <>
      <div
        onClick={() => onSelect()}
        className={`group py-6 border-t-2 transition-all cursor-pointer border-light flex-1 px-6 hover:border-secondary ${
          selected ? 'border-secondary' : ''
        }`}
      >
        <div
          className={`flex justify-between items-center text-light  group-hover:text-secondary ${
            selected ? 'text-secondary' : ''
          }`}
        >
          <span
            className={`text-lg md:text-xl xl:text-2xl font-bold transition-all`}
          >
            {name}
          </span>
          <span className="material-icons">
            {selected ? 'expand_less' : 'expand_more'}
          </span>
        </div>
      </div>
      <div className="container">
        <div className={`${selectedClasses}`} ref={ref}>
          <div className="pt-4 pb-14">{content}</div>
        </div>
      </div>
    </>
  );
};
