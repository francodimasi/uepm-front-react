import { Counter } from "./Counter";
import { CounterItem } from "./types/counter.type";

const counterData: CounterItem[] = [
  {
    label: "Especialistas",
    value: 96,
  },
  {
    label: "Sedes Clínicas",
    value: 52,
  },
  {
    label: "Ciudades",
    value: 26,
  },
  {
    label: "Especialidades",
    value: 18,
  },
];

export const CounterWrapper = () => {
  return (
    <div className="flex mt-10">
      {counterData.map((item) => (
        <div className="flex-1">
          <Counter {...item} />
        </div>
      ))}
    </div>
  );
};
