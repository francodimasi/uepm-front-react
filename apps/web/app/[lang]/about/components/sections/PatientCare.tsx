import { ImageWithFallback } from '@components/utils/ImageWithFallback';
import IsoLogo from 'public/images/Iso45001.png';

export const PatientCare: React.FC = () => {
  return (
    <>
      <div className="sm:hidden flex flex-col">
        <span className="text-primary uppercase text-sm font-normal font-['DMSans'] leading-none">
          Nuestra prioridad
        </span>
        <span className="text-dark text-3xl  font-semibold font-['Lexend'] leading-10 mt-4">
          Calidad y cuidado del paciente
        </span>
        <div className="grid grid-rows-5 grid-cols-12 mt-10 ">
          <div className="row-start-1 row-span-3 col-start-1 col-span-12 bg-[url('../public/images/doctor-talking-with-her-patient.png')] bg-no-repeat bg-cover">
          </div>
          <div className="row-start-3 row-span-3 col-start-2 col-span-10 flex flex-col bg-[#FFFFFF]">
            <ImageWithFallback
              src={IsoLogo}
              alt="Iso45001 logo"
              style={{
                marginLeft: '24px',
              }}
            />
            <div className="text-dark text-base font-normal font-['DMSans'] leading-normal px-6 pb-9 mt-[6px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
        </div>
      </div>

      <div className="hidden sm:flex flex-col mb-40">
        <span className="text-primary uppercase text-base font-medium font-['DMSans'] leading-tight">
          Nuestra prioridad
        </span>
        <span className="text-dark text-6xl font-semibold font-['Lexend'] leading-[72px] mt-3">
          Calidad y cuidado del paciente
        </span>
        <div className="w-full grid grid-rows-6 grid-cols-12 mt-14  bg-[url('../public/images/doctor-talking-with-her-patient.png')] bg-no-repeat bg-cover bg-top">
          <div className="row-start-4 row-end-6 col-start-2 col-end-12 flex flex-row items-center gap-16 bg-[#FFFFFF] pl-9  py-14 pr-24">
            <ImageWithFallback
              src={IsoLogo}
              alt="Iso45001 logo"
              style={{
                marginLeft: '38px',
              }}
            />
            <span className="text-dark text-base font-normal font-['DMSans'] leading-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
