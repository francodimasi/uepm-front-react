import Image from 'next/image';
import { L1, P2, OfficeBuildingIcon } from 'ui/core';
import { SiteCardProps } from '../Site.types';
import Link from 'next/link';
import { ContactSiteButton } from './ContactSiteButton';

export const SiteCard: React.FC<SiteCardProps> = ({
  name,
  address,
  website,
  logo,
}) => {
  return (
    <div className="w-full flex flex-col gap-10 p-4">
      <div className="flex flex-col gap-4">
        <div className=" flex gap-4 items-center">
          {logo ? <Image src={logo} width={48} height={48} alt={'logo'} /> : ''}
          <P2 className="text-base" label={name}></P2>
        </div>
        <div className="flex items-baseline gap-2">
          <OfficeBuildingIcon width={16} height={11} />
          <P2 className="text-normal" label={address}></P2>
        </div>
        {/* <div className="flex justify-between">
          <span>*****</span>
          <span>3 comentarios</span>
        </div> */}
        {website ? (
          <div className="flex flex-col">
            <P2 className="text-base font-bold m-0 p-0">Website</P2>
            <Link href={website}>
              <L1 className="text-base font-normal underline" label={website} />
            </Link>
          </div>
        ) : null}
      </div>

      <div className="flex flex-col gap-6">
        <P2 className="text-base font-bold font-['Lexend]">
          Seleccione una opción
        </P2>
        <div className="flex justify-evenly gap-3">
          <label>
            <input type="radio" />
            <P2 className="font-medium text-base ml-2">Soy Medico</P2>
          </label>
          <label>
            <input type="radio" />
            <P2 className="font-medium text-base ml-2">Soy Sponsor</P2>
          </label>
        </div>
        <ContactSiteButton />
      </div>
    </div>
  );
};
