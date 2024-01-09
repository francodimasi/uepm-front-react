import { ImageWithFallback } from '@components/utils/ImageWithFallback';
import AboutUsMobile from 'public/images/aboutUsMobile.png';
import AboutUsDesktop from 'public/images/aboutUsDesktop.png';
import HumanCareImg from 'public/images/humanCare.png';
import Shapes from 'public/images/shapes.jpg';

const Title = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-start sm:justify-evenly items-start sm:items-center gap-4 sm:gap-72">
        <div className="text-dark text-2xl sm:text-7xl font-semibold font-['Lexend'] leading-10 sm:leading-[80px]">
          Quiénes somos
        </div>
        <div>
          <span className="text-dark text-xl sm:text-[28px] font-normal font-['DMSans'] leading-7 sm:leading-10">
            Trabajamos en la inclusión de pacientes uniendo a{' '}
          </span>
          <span className="text-dark text-xl sm:text-[28px] font-bold font-['DM Sans'] leading-7 sm:leading-10">
            todos los actores de la investigación
          </span>
          <span className="text-dark text-xl sm:text-[28px] font-bold font-['DM Sans'] leading-7 sm:leading-10">
            .
          </span>
        </div>
      </div>
      <div className="block sm:hidden w-full mt-12">
        <ImageWithFallback
          src={AboutUsMobile}
          alt="Header image"
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </div>
      <div className="hidden sm:block w-full mt-6">
        <ImageWithFallback
          src={AboutUsDesktop}
          alt="Header image"
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </div>
    </div>
  );
};

const HumanCare = () => {
  return (
    <div>
      <div className="sm:hidden flex flex-col justify-start items-start gap-4 px-4">
        <span className="text-primary text-sm font-normal font-['DMSans'] leading-none">
          Nuestro compromiso
        </span>
        <span className="text-dark text-3xl  font-semibold font-['Lexend'] leading-10">
          Acompañamiento humano
        </span>
        <span className="text-dark text-base font-normal font-['DMSans'] leading-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </span>
        <div className="block w-full mt-12">
          <ImageWithFallback
            src={HumanCareImg}
            alt="Human care image"
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </div>
      </div>
      <div className="hidden sm:flex flex-row justify-between items-start pl-20 bg-[url('../public/images/humanCare.png')] bg-no-repeat bg-right-bottom bg-contain">
        <div className="flex flex-col w-1/2">
          <span className="text-primary text-base font-medium font-['DMSans'] leading-tight">
            Nuestro compromiso
          </span>
          <span className="text-dark text-6xl font-semibold font-['Lexend'] leading-[72px] mt-[13px]">
            Acompañamiento humano
          </span>
          <span className="text-dark text-base font-normal font-['DMSans'] leading-normal mt-[34px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </span>
          <ImageWithFallback
            src={Shapes}
            alt="Decorative shapes drawing"
            style={{
              width: '50%',
              height: 'auto',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export const AboutUs: React.FC = () => {
  return (
    <div className="w-full flex flex-col justify-start items-start gap-[72px]">
      <Title />
      <HumanCare />
    </div>
  );
};
