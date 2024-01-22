import { Top, Middle, Bottom } from './sections/';

export const Summary: React.FC = () => {
  return (
    <div className="w-full flex flex-col justify-start items-start gap-[72px]">
      <Top />
      <Middle />
      <Bottom />
    </div>
  );
};
