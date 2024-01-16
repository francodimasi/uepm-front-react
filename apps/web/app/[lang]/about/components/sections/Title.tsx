import { ImageWithFallback } from '@components/utils/ImageWithFallback';
import AboutUsMobile from 'public/images/aboutUsMobile.png';
import AboutUsDesktop from 'public/images/aboutUsDesktop.png';
import { H2, P1 } from 'ui/core';

export const Title: React.FC = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row justify-start sm:justify-between items-start sm:items-center gap-4 sm:gap-72 pr-[10%]">
        <H2 label={'Quiénes somos'} className="sm:!pb-0" />
        <div>
          <P1 label={'Trabajamos en la inclusión de pacientes uniendo a '} />
          <P1
            label={'todos los actores de la investigación'}
            className="!font-bold"
          />
          <P1 label={'.'} />
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
