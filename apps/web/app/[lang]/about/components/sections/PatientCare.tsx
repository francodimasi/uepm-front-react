import { ImageWithFallback } from '@components/utils/ImageWithFallback';
import IsoLogo from 'public/images/Iso45001.png';
import { H2, L1, P1 } from 'ui/core';

export const PatientCare: React.FC = () => {
  return (
    <>
      <div className="sm:hidden flex flex-col">
        <L1 label={'Nuestra prioridad'} className="uppercase text-primary" />
        <H2 label={'Calidad y cuidado del paciente'} />
        <div className="grid grid-rows-5 grid-cols-12 mt-10 ">
          <div className="row-start-1 row-span-3 col-start-1 col-span-12 bg-[url('../public/images/doctor-talking-with-her-patient.png')] bg-no-repeat bg-cover bg-top"></div>
          <div className="row-start-3 row-span-3 col-start-2 col-span-10 flex flex-col bg-[#FFFFFF]">
            <ImageWithFallback
              src={IsoLogo}
              alt="Iso45001 logo"
              style={{
                marginLeft: '24px',
              }}
            />
            <P1
              label={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
              }
            />
          </div>
        </div>
      </div>

      <div className="hidden sm:flex flex-col mb-40">
        <L1 label={'Nuestra prioridad'} className="uppercase text-primary" />
        <H2 label={'Calidad y cuidado del paciente'} />
        <div className="w-full max-h-[768px] grid grid-rows-6 grid-cols-12 mt-14  bg-[url('../public/images/doctor-talking-with-her-patient.png')] bg-no-repeat bg-cover bg-top">
          <div className="row-start-4 row-end-6 col-start-2 col-end-12 flex flex-row items-center gap-16 bg-[#FFFFFF]">
            <ImageWithFallback
              src={IsoLogo}
              alt="Iso45001 logo"
              style={{
                marginLeft: '38px',
              }}
            />
            <P1
              label={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};
