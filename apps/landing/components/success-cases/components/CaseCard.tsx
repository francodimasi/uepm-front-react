import { Counter } from "../../shared/counter/Counter";
export type CaseCardProps = {
  value: number;
  label: string;
  title: string;
  text: string;
};
export const CaseCard = ({ title, text, value, label }: CaseCardProps) => {
  return (
    <div className="bg-dark bg-opacity-60 backdrop-blur p-8 text-light">
      <Counter label={label} value={value} symbol="%" />
      <h4 className="sm:text-2xl mt-8 mb-4 font-bold">{title}</h4>
      <p>{text}</p>
    </div>
  );
};
