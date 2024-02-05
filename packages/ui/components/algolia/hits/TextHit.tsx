import { P1, P2 } from '../../../core';
import { TextHitProps } from './types';
import { SITE, STUDY } from '../Algolia.types';

export const TextHit = ({ hit }: TextHitProps) => {
  return (
    <>
      {hit.object_type === STUDY && (
        <div className="flex items-center gap-1">
          <div className="flex flex-col p-2">
            <P1>{hit.brief_title}</P1>
            <P2>{hit.nct_id}</P2>
            <P2>{hit.conditions_ct[0]}</P2>
          </div>
        </div>
      )}
      {hit.object_type === SITE && (
        <div className="">
          <div className="flex flex-col p-2">
            <P1>{hit.name}</P1>
          </div>
        </div>
      )}
    </>
  );
};
