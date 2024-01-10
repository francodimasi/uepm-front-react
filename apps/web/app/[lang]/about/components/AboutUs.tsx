import { HumanCare } from './sections/HumanCare';
import { PatientCare } from './sections/PatientCare';
import { Title } from './sections/Title';

export const AboutUs: React.FC = () => {
  return (
    <div className="w-full flex flex-col justify-start items-start gap-[72px]">
      <Title />
      <HumanCare />
      <PatientCare />
    </div>
  );
};
