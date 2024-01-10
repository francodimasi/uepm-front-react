import { ImageWithFallback } from '@components/utils/ImageWithFallback';
import HumanCareImg from 'public/images/humanCare.png';
import Shapes from 'public/images/shapes.jpg';

export const HumanCare: React.FC = () => {
  return (
    <div>
      <div className="sm:hidden flex flex-col justify-start items-start gap-4 px-4">
        <span className="text-primary uppercase text-sm font-normal font-['DMSans'] leading-none">
          Nuestro compromiso
        </span>
        <span className="text-dark text-3xl  font-semibold font-['Lexend'] leading-10 mt-4">
          Acompañamiento humano
        </span>
        <span className="text-dark text-base font-normal font-['DMSans'] leading-normal mt-6">
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
      <div className="hidden sm:flex flex-row justify-between items-start relative 2xl:min-h-[800px]">
        <div className="flex flex-col w-1/2">
          <span className="text-primary uppercase text-base font-medium font-['DMSans'] leading-tight">
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
              marginTop: '62px',
            }}
          />
        </div>
        <div className="hidden sm:max-2xl:block absolute bottom-0 right-0">
          <ImageWithFallback
            src={HumanCareImg}
            alt="human care"
            style={{
              width: 'auto',
              height: 'auto',
            }}
          />
        </div>
        <div className="hidden 2xl:block absolute bottom-0 right-0">
          <ImageWithFallback
            src={HumanCareImg}
            alt="human care"
            style={{
              width: '800px',
              height: '800px',
            }}
          />
        </div>
      </div>
    </div>
  );
};
