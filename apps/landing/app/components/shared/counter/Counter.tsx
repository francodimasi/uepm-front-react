import CountUp from "react-countup";
import { CounterItem } from "./types/counter.type";

export const Counter = ({ label, value }: CounterItem) => {
  return (
    <div>
      <CountUp end={value} duration={1} preserveValue={true}>
        {({ countUpRef }) => (
          <div>
            <span
              ref={countUpRef}
              className="text-primary font-serif text-7xl font-medium relative right-1 mb-4 block"
            >
              {value}
            </span>
          </div>
        )}
      </CountUp>
      <div className="text-light text-xs font-bold uppercase">{label}</div>
    </div>
  );
};
