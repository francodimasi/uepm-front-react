import { P2, Card, H4, Button } from 'ui/core';
import { useTranslations } from 'intl';
import { ImageWithFallback } from '@components/utils/ImageWithFallback';
import { StudyCardProps } from '../Study.types';

export const StudyCard: React.FC<StudyCardProps> = ({ study }) => {
  const t = useTranslations('studies.study');

  return (
    <Card className="w-full max-h-min flex flex-col items-center justify-center !m-0 !p-0">
      <div className="w-full flex flex-col divide-y divide-gray-medium p-4">
        <div className="flex flex-col">
          <H4 label={t('sponsor')} className="p-0" />
          <div className="flex items-center gap-4">
            <ImageWithFallback
              width={40}
              height={40}
              src={'/fakeurl'}
              alt={'Sponsor logo'}
            />
            <P2 label={'SANOFI'} />
          </div>
        </div>
        <div className="flex flex-col">
          <H4 label={t('type')} className="!m-0 !p-0" />
          <P2 label={'Intervencional'} />
        </div>
        <div className="flex flex-col">
          <H4 label={t('conditions')} className="p-0" />
          {study.conditions_ct.map((condition, index) => (
            <P2 key={index} label={condition} />
          ))}
        </div>
        <div className="flex flex-col">
          <H4 label={t('requirements')} className="p-0" />
          <P2
            label={`${study.minimum_age_years}-${study.maximum_age_years} years`}
          />
          <P2 label={study.gender} />

          <H4 label={'+info'} className="p-0" />
        </div>
        <div className="flex flex-col">
          <H4 label={'Unique study ID'} className="p-0" />
          <P2 label={study.id} />
          <P2 label={study.nct_id} />
          <Button size="xs" color="dark" expand="none" className="w-full mt-4">
            <P2
              label={'Aplicar'}
              className="!text-sm !font-bold text-white leading-normal !pb-0"
            />
          </Button>
        </div>
      </div>
    </Card>
  );
};
