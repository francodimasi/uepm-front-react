"use client";
import { useCountUp } from "use-count-up";
import { CounterItem } from "./types/counter.type";

export const Counter = ({ label, value }: CounterItem) => {
  const { value: counter } = useCountUp({
    isCounting: true,
    end: value,
    duration: 1,
  });

  return (
    <div>
          <div>
            <span
              className="text-primary font-serif text-7xl font-medium relative right-1 mb-4 block"
            >
              {counter}
            </span>
          </div>
      <div className="text-light text-xs font-bold uppercase">{label}</div>
    </div>
  );
};
