import Image from 'next/image';

import GreyCircle from 'public/images/GreyCircle.svg';
import GreenCircle from 'public/images/GreenCircle.svg';
import WhiteCircle from 'public/images/WhiteCircle.svg';
import TealCircle from 'public/images/TealCircle.svg';
import GreyHalfEllipseRight from 'public/images/GreyHalfEllipseRight.svg';
import GreenHalfEllipseRight from 'public/images/GreenHalfEllipseRight.svg';
import OrangeHalfEllipse from 'public/images/OrangeHalfEllipse.svg';
import GreyHalfEllipseTop from 'public/images/GreyHalfEllipseTop.svg';
import BeigeRectangle from 'public/images/BeigeRectangle.svg';

import SmilingMan from 'public/images/SmilingMan.png';
import SmilingBaldMan from 'public/images/SmilingBaldMan.png';
import SmilingWoman from 'public/images/SmilingWoman.png';
import SmilingAsianWoman from 'public/images/SmilingAsianWoman.png';
import SmilingDoctor from 'public/images/SmilingDoctor.png';

export const QuienesSomos: React.FC = () => {
  return (
    <div className="w-full flex flex-col justify-start items-start gap-12 ">
      <div className="flex-col justify-start items-start gap-4 flex">
        <div className="text-dark text-2xl font-semibold font-['Lexend'] leading-10">
          Quiénes somos
        </div>
        <div>
          <span className="text-dark text-xl font-normal font-['DMSans'] leading-7">
            Trabajamos en la inclusión de pacientes uniendo a{' '}
          </span>
          <span className="text-dark text-xl font-bold font-['DM Sans'] leading-7">
            todos los actores de la investigación
          </span>
          <span className="text-dark text-xl font-normal font-['DM Sans'] leading-7">
            .
          </span>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex basis-full">
          <Image src={GreyHalfEllipseRight}></Image>
          <Image src={GreenHalfEllipseRight}></Image>
          <div className="grid grid-cols-1 grid-rows-1 items-center justify-items-center">
            <Image src={GreyCircle} className='col-start-1 col-end-1 row-start-1'></Image>
            <Image src={SmilingWoman} className='col-start-1 col-end-1 row-start-1'></Image>
          </div>
        </div>
        <div className="flex">
          <div className="grid grid-cols-1 grid-rows-1 items-center justify-items-center">
            <Image src={GreenCircle} className='col-start-1 row-start-1'></Image>
            <Image src={SmilingMan} className='col-start-1 row-start-1'></Image>
          </div>
          <div className="flex flex-col">
            <Image src={OrangeHalfEllipse}></Image>
            <Image src={GreyHalfEllipseTop}></Image>
          </div>
        </div>
        <div className='grid grid-rows-1 grid-cols-3 items-center justify-items-center'>
          <div className="grid grid-cols-2 grid-rows-1 basis-full items-center justify-items-center col-start-1 col-end-3">
            <Image src={BeigeRectangle} className='z-0 col-start-1 col-end-3 row-start-1'></Image>
            <Image src={WhiteCircle} className='z-10 col-start-1 row-start-1'></Image>
            <Image src={SmilingAsianWoman} className='z-20 col-start-1 row-start-1'></Image>
            <Image src={SmilingDoctor} className='z-10 col-start-2 row-start-1'></Image>
          </div>
          <div className="grid grid-cols-1 grid-rows-1 items-center justify-items-center col-start-3">
            <Image src={TealCircle} className='col-start-1 col-end-1 row-start-1'></Image>
            <Image src={SmilingBaldMan} className='col-start-1 col-end-1 row-start-1'></Image>
          </div>
        </div>
      </div>
    </div>
  );
};
