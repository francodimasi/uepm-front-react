import Image from 'next/image';
import { LogoProps } from './Logo.types';
import { getLogo } from './utils';

export const Logo: React.FC<LogoProps> = ({
  className,
  brand,
  type,
  height = 100,
  width = 100,
}) => {
  return (
    <div className={className}>
      <Image
        height={height}
        width={width}
        priority
        src={getLogo(brand, type)}
        alt="Trialtech"
      />
    </div>
  );
};
