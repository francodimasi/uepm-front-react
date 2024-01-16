import { ImageWithFallback } from '@components/utils/ImageWithFallback';
import HumanCareImg from 'public/images/humanCare.png';
import Shapes from 'public/images/shapes.png';
import { H2, L1, P2 } from 'ui/core';

export const HumanCare: React.FC = () => {
  return (
    <div>
      <div className="sm:hidden flex flex-col justify-start items-start gap-4 px-4">
        <L1 label={'Nuestro compromiso'} className="uppercase text-primary" />
        <H2 label={'Acompañamiento humano'} />
        <P2
          label={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          }
        />
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
      <div className="hidden sm:grid sm:grid-rows-1 sm:grid-cols-12">
        <div className="flex flex-col col-start-1 col-span-5 row-start-1 row-span-1">
          <L1 label={'Nuestro compromiso'} className="uppercase text-primary" />
          <H2 label={'Acompañamiento humano'} />
          <P2
            label={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            }
          />
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
        <div className="col-start-7 col-span-6 row-start-1 row-span-1">
          <ImageWithFallback
            src={HumanCareImg}
            alt="human care"
            style={{
              height: '100%',
              width: 'auto',
            }}
          />
        </div>
      </div>
    </div>
  );
};
