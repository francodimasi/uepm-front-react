'use client';

import { LocaleProps } from 'intl';
import { Algolia } from 'ui/components';
import { StudiesBrowserProps } from './StudiesBrowser.types';

// const study: AlgoliaStudy = {
//   id: '4f74c5ba-61a1-4ca2-9e89-606b145981b0',
//   brief_title: 'Fake study to test',
//   official_title: 'Mocked study object to test how to display in card',
//   conditions_ct: ['conditionOne', 'conditionAnother'],
//   keywords: ['Lupus', 'Esquizofrenia', 'Demencia'],
//   nct_id: '671f427d-b703-4a23-9817-10277d8339ef',
//   acronym: 'ACRO-FJL',
//   overall_status: 'Open',
//   sites: [],
//   sponsors: [{ name: 'Phyzer' }],
//   inclusion_criteria: ['1st criteria', '2nd criteria'],
//   exclusion_criteria: ['exlucdeOne'],
//   show_in_referrals_app: true,
//   sponsored: true,
//   minimum_age_years: 18,
//   maximum_age_years: 39,
//   gender: 'M',
// };

export const StudiesBrowser = ({
  apiKey,
  appId,
  indexName,
}: // locale,
StudiesBrowserProps & LocaleProps) => {
  // const { browserState, browserDispatch } = useContext(StudiesBrowserContext);

  // const handleClick = (study: AlgoliaStudy) => {
  //   browserDispatch({
  //     type: studiesBrowserActions.SET_SELECTED_STUDY,
  //     selectedStudy: study,
  //   });
  // };

  // const onClick = () => {
  //   handleClick(study);
  // };

  return (
    <Algolia appId={appId} apiKey={apiKey} indexName={indexName}>
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="flex flex-col col-span-1 lg:col-span-2 gap-1 mb-2">
          <div className="bg-primary-dark">Searchbar</div>
          <div className="bg-primary">Results</div>
          <div className="bg-primary">Results</div>
          <div className="bg-primary">Results</div>
          {/* <div className="bg-primary" onClick={onClick}>
            Click Me!
          </div> */}
          <div className="bg-primary">Results</div>
          <div className="bg-primary">Results</div>
          <div className="bg-tertiary text-center">Pagination</div>
        </div>
        <div className="hidden lg:flex col-span-1 bg-secondary">Filters</div>
      </div>
      {/* <StudyPreview locale={locale} /> */}
    </Algolia>
  );
};
