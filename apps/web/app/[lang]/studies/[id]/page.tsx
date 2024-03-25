import { notFound } from 'next/navigation';
import { Link } from '@intl/navigation';
import { ArrowBackIcon } from 'ui/core/icons';
import { Layout } from '@components/core/layout/Layout';
import { defaultLocale } from 'intl';
// import { SiteProps } from './Site.types';
import { StudyCard } from './components/StudyCard';
import { Study } from '@models/study.types';

const Page = ({
  params: { lang = defaultLocale, id },
}: {
  params: { lang: string; id: string };
}) => {
  console.log(id);

  //   const site = await getStudyById(id, lang);
  // const study: AlgoliaStudy = {
  //     id: '4f74c5ba-61a1-4ca2-9e89-606b145981b0',
  //     brief_title: 'Fake study to test',
  //     official_title: 'Mocked study object to test how to display in card',
  //     conditions_ct: ['conditionOne', 'conditionAnother'],
  //     keywords: ['Lupus', 'Esquizofrenia', 'Demencia'],
  //     nct_id: '671f427d-b703-4a23-9817-10277d8339ef',
  //     acronym: 'ACRO-FJL',
  //     overall_status: 'Open',
  //     sites: [],
  //     sponsors: [{ name: 'Phyzer' }],
  //     inclusion_criteria: ['1st criteria', '2nd criteria'],
  //     exclusion_criteria: ['exlucdeOne'],
  //     show_in_referrals_app: true,
  //     sponsored: true,
  //     minimum_age_years: 18,
  //     maximum_age_years: 39,
  //     gender: 'M',
  //   };
  const study: Study = {
    id: '84f12a63-8eca-4d66-a655-87799a1445b5',
    published: true,
    nct_id: 'NCT05890677',
    condition_mutations: [],
    study_type: 'self-hosted',
    overall_status: 'recruiting',
    official_title:
      'The LYMPH Trial - Surgical Versus Conservative Complex Physical Decongestion Therapy for Chronic Breast Cancer-Related Lymphedema: A Pragmatic, Randomized, Multicenter Superiority Trial',
    phase: null,
    enrollment_type: 'anticipated',
    enrollment: 280,
    sponsored: false,
    last_update_posted_date: '2024-03-08T00:00:00.000Z',
    first_posted_date: '2023-06-06T00:00:00.000Z',
    brief_title:
      'The LYMPH Trial - Surgical Versus Conservative Complex Physical Decongestion Therapy for Chronic Breast Cancer-Related Lymphedema',
    keywords: [
      'lymphatic surgery',
      'breast cancer related lymphedema',
      'sentinel lymph node biopsy',
      'axillary lymph node dissection',
      'manual lymphatic drainage',
      'conservative complex physical decongestion therapy',
    ],
    conditions_ct: ['Lymphedema, Breast Cancer'],
    condition_browse: [],
    detailed_description:
      "To date, conservative complex physical decongestion therapy (CDT) is the gold standard for\r\n      BCRL (breast cancer related lymphedema) and includes manual lymphatic drainage, local\r\n      compression with bandages and garments, physical exercises and meticulous skin care. It is,\r\n      however, too often ineffective to prevent stage progression in curing BCRL and purely\r\n      symptomatic. Lymphovenous anastomosis (LVA) and vascularized lymph node transfer (VLNT) are\r\n      two surgical techniques that, in contrast to CDT, are able to actually address the underlying\r\n      causes and eventually restore the lymphatic drainage. LVA achieves this by creating numerous\r\n      bypasses between lymphatic vessels and venules allowing the drainage of excessive fluid\r\n      within the subcutaneous tissues into the venous system, while VLNT usually brings functioning\r\n      lymph nodes to an area devoid of lymph nodes or with dysfunctional lymph nodes, thus enabling\r\n      the spontaneous development of new lymphatic pathways. Both techniques have shown very\r\n      promising results with low complication rates and improved Quality of Life (QoL) for the\r\n      patients. However, no multicentric randomized controlled trial (RCT) has yet prospectively\r\n      evaluated the superiority of these surgical techniques over CDT alone, limiting patient's\r\n      access to most effective treatment available. Requests for cost reimbursement must still be\r\n      submitted to insurance companies in most countries and are often rejected, thus delaying\r\n      surgical treatment and resulting in prolonged suffering of affected patients. This is\r\n      untenable seeing as affected patients suffer from a heavy physical, psychological and\r\n      financial burden. This pragmatic, randomized, multicenter trial aims to establish a solid\r\n      scientific basis assessing the superiority of surgical treatment over CDT alone.",
    meta_title: '',
    meta_description: '',
    sites: [],
    translations: [
      {
        es: {
          official_title:
            'Ensayo LYMPH: Terapia quirúrgica versus conservadora de descompresión física compleja para linfedema crónico relacionado con cáncer de mama: un ensayo pragmático, aleatorio y de superioridad multicéntrico.',
          brief_title:
            'Ensayo clínico para pacientes con linfedema relacionado con el cáncer de mama',
          brief_summary:
            'Ensayo LYMPH: Terapia quirúrgica versus conservadora de descompresión física compleja para linfedema crónico relacionado con cáncer de mama: un ensayo pragmático, aleatorio y de superioridad multicéntrico.',
          detailed_description:
            'Hasta la fecha, la terapia conservadora compleja de descompresión física (CDT) es el estándar de oro para el linfedema relacionado con el cáncer de mama e incluye drenaje linfático manual, compresión local con vendajes y prendas, ejercicios físicos y cuidado meticuloso de la piel. Sin embargo, a menudo es ineficaz para prevenir la progresión de la etapa en la cura del  linfedema relacionado con el cáncer de mama y es puramente sintomático.<br><br> \r\n\r\nLa anastomosis linfovenosa (LVA) y el trasplante vascularizado de ganglios linfáticos (VLNT) son dos técnicas quirúrgicas que, a diferencia de la CDT, son capaces de abordar realmente las causas subyacentes y eventualmente restaurar el drenaje linfático. La anastomosis linfovenosa logra esto creando numerosos bypass entre los vasos linfáticos y las vénulas, permitiendo el drenaje de fluido excesivo dentro de los tejidos subcutáneos hacia el sistema venoso, mientras que el trasplante vascularizado de ganglios linfáticos generalmente lleva ganglios linfáticos funcionales a un área carente de ganglios linfáticos o con ganglios linfáticos disfuncionales, lo que permite el desarrollo espontáneo de nuevas vías linfáticas. Ambas técnicas han mostrado resultados muy prometedores con bajos índices de complicaciones y una mejor calidad de vida para los pacientes. Sin embargo, aún no se ha evaluado prospectivamente la superioridad de estas técnicas quirúrgicas sobre la terapia conservadora compleja de descompresión física sola en un ensayo controlado aleatorio multicéntrico, lo que limita el acceso de los pacientes al tratamiento más efectivo disponible.<br><br> \r\n\r\nEste ensayo pragmático, aleatorizado y multicéntrico tiene como objetivo establecer una base científica sólida para evaluar la superioridad del tratamiento quirúrgico sobre la terapia conservadora compleja de descompresión física sola.\r\n\r\n<br><br> <h2><strong>¿Dónde se realiza este estudio de investigación? Busca en el mapa el sitio más cercano a tu localidad</strong></h2>',
          conditions_ct: ['Cáncer de mama'],
          meta_title: '',
          meta_description: '',
          keywords: [
            'cirugía linfática',
            'linfedema relacionado con el cáncer de mama',
            'biopsia del ganglio linfático centinela',
            'dissección de ganglios linfáticos axilares',
            'drenaje linfático manual',
            'terapia conservadora compleja de descongestión física',
          ],
        },
      },
      {
        pt: {
          official_title:
            'O Julgamento LYMPH - Terapia Complexa de Descongestão Física Cirúrgica Versus Conservadora para Linfedema Crônico Relacionado ao Câncer de Mama: Um Julgamento Pragmático, Randomizado e Multicêntrico de Superioridade',
          brief_title:
            'O Julgamento LYMPH - Terapia Complexa de Descongestão Física Cirúrgica Versus Conservadora para Linfedema Crônico Relacionado ao Câncer de Mama',
          brief_summary: '',
          detailed_description:
            'Até o momento, a terapia conservadora complexa de descongestão física (CDT) é o padrão ouro para BCRL (linfedema relacionado ao câncer de mama) e inclui drenagem linfática manual, compressão local com bandagens e roupas, exercícios físicos e cuidados meticulosos com a pele. No entanto, muitas vezes é ineficaz para prevenir a progressão do estágio na cura do BCRL e puramente sintomática. A anastomose linfovenosa (LVA) e a transferência vascularizada de linfonodos (VLNT) são duas técnicas cirúrgicas que, ao contrário da CDT, são capazes de realmente abordar as causas subjacentes e eventualmente restaurar a drenagem linfática. A LVA alcança isso criando inúmeros desvios entre os vasos linfáticos e as vênulas, permitindo a drenagem de fluido excessivo nos tecidos subcutâneos para o sistema venoso, enquanto a VLNT geralmente traz linfonodos funcionais para uma área desprovida de linfonodos ou com linfonodos disfuncionais, permitindo o desenvolvimento espontâneo de novas vias linfáticas. Ambas as técnicas têm mostrado resultados muito promissores com baixas taxas de complicações e melhor qualidade de vida para os pacientes. No entanto, nenhum ensaio controlado randomizado multicêntrico (RCT) avaliou prospectivamente a superioridade dessas técnicas cirúrgicas sobre a CDT sozinha, limitando o acesso dos pacientes ao tratamento mais eficaz disponível. Pedidos de reembolso de custos ainda devem ser submetidos às seguradoras na maioria dos países e muitas vezes são rejeitados, atrasando assim o tratamento cirúrgico e resultando no sofrimento prolongado dos pacientes afetados. Isso é insustentável, uma vez que os pacientes afetados sofrem com um pesado fardo físico, psicológico e financeiro. Este ensaio pragmático, randomizado e multicêntrico tem como objetivo estabelecer uma base científica sólida avaliando a superioridade do tratamento cirúrgico sobre a CDT sozinha.',
          conditions_ct: [],
          meta_title: '',
          meta_description: '',
          keywords: [
            'cirurgia linfática',
            'linfedema relacionado ao câncer de mama',
            'biópsia do linfonodo sentinela',
            'dissecção dos gânglios linfáticos axilares',
            'drenagem linfática manual',
            'terapia conservadora complexa de descongestão física',
          ],
        },
      },
      {
        en: {
          official_title:
            'The LYMPH Trial - Surgical Versus Conservative Complex Physical Decongestion Therapy for Chronic Breast Cancer-Related Lymphedema: A Pragmatic, Randomized, Multicenter Superiority Trial',
          brief_title:
            'The LYMPH Trial - Surgical Versus Conservative Complex Physical Decongestion Therapy for Chronic Breast Cancer-Related Lymphedema',
          brief_summary: '',
          detailed_description:
            "To date, conservative complex physical decongestion therapy (CDT) is the gold standard for\r\n      BCRL (breast cancer related lymphedema) and includes manual lymphatic drainage, local\r\n      compression with bandages and garments, physical exercises and meticulous skin care. It is,\r\n      however, too often ineffective to prevent stage progression in curing BCRL and purely\r\n      symptomatic. Lymphovenous anastomosis (LVA) and vascularized lymph node transfer (VLNT) are\r\n      two surgical techniques that, in contrast to CDT, are able to actually address the underlying\r\n      causes and eventually restore the lymphatic drainage. LVA achieves this by creating numerous\r\n      bypasses between lymphatic vessels and venules allowing the drainage of excessive fluid\r\n      within the subcutaneous tissues into the venous system, while VLNT usually brings functioning\r\n      lymph nodes to an area devoid of lymph nodes or with dysfunctional lymph nodes, thus enabling\r\n      the spontaneous development of new lymphatic pathways. Both techniques have shown very\r\n      promising results with low complication rates and improved Quality of Life (QoL) for the\r\n      patients. However, no multicentric randomized controlled trial (RCT) has yet prospectively\r\n      evaluated the superiority of these surgical techniques over CDT alone, limiting patient's\r\n      access to most effective treatment available. Requests for cost reimbursement must still be\r\n      submitted to insurance companies in most countries and are often rejected, thus delaying\r\n      surgical treatment and resulting in prolonged suffering of affected patients. This is\r\n      untenable seeing as affected patients suffer from a heavy physical, psychological and\r\n      financial burden. This pragmatic, randomized, multicenter trial aims to establish a solid\r\n      scientific basis assessing the superiority of surgical treatment over CDT alone.",
          conditions_ct: ['Lymphedema, Breast Cancer'],
          meta_description: '',
          meta_title: '',
          keywords: [
            'lymphatic surgery',
            'breast cancer related lymphedema',
            'sentinel lymph node biopsy',
            'axillary lymph node dissection',
            'manual lymphatic drainage',
            'conservative complex physical decongestion therapy',
          ],
        },
      },
    ],
    hours: 4,
    paid_by: 'none',
    screening_hours: 1,
    show_in_referrals_app: false,
    id_information: {
      id: '496118e1-9d9a-4913-adc8-fef411a73e2a',
      study_id: '84f12a63-8eca-4d66-a655-87799a1445b5',
      org_study_id: '2023-00733; mu21kappos',
      secondary_ids: [],
      nct_aliases: [],
    },
    sponsors: [
      {
        id: '22edee7f-1e86-4236-8467-b29529ba7bde',
        agency_class: 'other',
        agency: 'University Hospital, Basel, Switzerland',
        logo: null,
      },
      {
        id: '1d65b9e5-5e9e-482e-b5de-1e06c02be84b',
        agency_class: 'other',
        agency: 'Swiss National Science Foundation',
        logo: null,
      },
      {
        id: 'ebaa9a15-952d-4709-a72d-8823ecd9f355',
        agency_class: 'other',
        agency: 'Rising Tide Foundation',
        logo: null,
      },
      {
        id: '75ddfa4d-930c-4259-b026-ed787373bdae',
        agency_class: 'other',
        agency: 'Krebsforschung Schweiz, Bern, Switzerland',
        logo: null,
      },
    ],
    countries: [],
    conditions: ['Breast CAcner'],
  };

  if (!study) notFound();
  // const t = await getTranslations({ lang, namespace: 'studies.study' });
  return (
    <Layout locale={lang}>
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-14">
        <div className="w-full col-span-1 lg:col-span-2 xl:col-span-3 pr-0">
          <div className="justify-between items-center inline-flex h-12">
            <Link href="/" locale={lang}>
              <ArrowBackIcon />
            </Link>
          </div>

          <div className="h-full flex-col flex gap-4">
            STUDY NAME AND DESCRIPTION
          </div>
        </div>

        <div className="col-span-1 lg:row-span-2 pl-0 flex flex-col gap-12 lg:gap-10">
          <StudyCard study={study} />
        </div>

        <div className="w-full col-span-1 lg:col-span-2 xl:col-span-3 pr-0 flex-col justify-start items-start gap-14 inline-flex divide-y divide-gray-medium">
          MORE INFO HERE
        </div>
      </div>
    </Layout>
  );
};

export default Page;

// // TODO : Define and generate metadata
// export async function generateMetadata({
//   params: { id, lang },
// }: StudyProps): Promise<Metadata> {
//   const study = await getStudyById(id, lang);

//   if (!study) notFound();

//   const headersInstance = headers();
//   const url = headersInstance.get('x-url');

//   return setMetadata({ url, study });
// }
