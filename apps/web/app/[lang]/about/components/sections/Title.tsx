import { ImageWithFallback } from '@components/utils/ImageWithFallback';
import AboutUsMobile from 'public/images/aboutUsMobile.png';
import AboutUsDesktop from 'public/images/aboutUsDesktop.png';

export const Title: React.FC = () => {
  return (
    <div className="w-full">
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
