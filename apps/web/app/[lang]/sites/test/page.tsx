import { SitePreviewCardMobile } from '../components/sitePreviewCard';

const Site = () => {
  return {
    username: '',
    studies: [
      {
        id: 5555,
        status: 'recruiting',
      },
      {
        id: 999,
        status: 'closed',
      },
    ],
    id: 'b643cc15-72bb-4eb5-90ac-9f078c74396f',
    name: 'Sitio de Prueba',
    description:
      'Somos una organización que trabaja en la generación de conocimiento para mejorar la calidad de vida de las personas a través de la investigación clínica. Trabajamos con un fuerte interés en concientizar y educar a la sociedad sobre la prevención y tratamiento de enfermedades y sobre la importancia de los ensayos clínicos para lograrlo.',
    url: 'www.google.com',
    verified: true,
    address: 'Av Triunvirato 3079, C1427 AAD, Buenos Aires, Argentina',
    lat: -34.5840872,
    lng: -58.46593919999999,
    phone: '01130765822',
    email: 'martinez.lucassebastian@gmail.com',
    category: 'trial',
    pipedrive_organization_id: '15599',
    keywords: [
      'Cáncer de pulmón',
      'Diabetes',
      'Obesidad',
      'Cáncer de próstata',
      'Fibrosis pulmonar',
      'Cáncer de útero',
      'Cardiovascular',
      'Cáncer de mama',
      'Insuficiencia cardíaca',
      'Cáncer de riñón',
      'Enfermedad renal crónica',
    ],
    logo: 'https://uepm-dev.sfo3.digitaloceanspaces.com/2puvvkskzb5x12wielan6y5apzrt?response-content-disposition=inline%3B%20filename%3D%22original_logo.gif%22%3B%20filename%2A%3DUTF-8%27%27original_logo.gif&response-content-type=image%2Fgif&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=TEIB4WPTWDF6AMGMSWIW%2F20240301%2Fsfo3%2Fs3%2Faws4_request&X-Amz-Date=20240301T155735Z&X-Amz-Expires=1800&X-Amz-SignedHeaders=host&X-Amz-Signature=7c32b2d23a9961b2908aa59c2eef88ab125542650c1f670c7c4563d57faf99bc',
    map: 'https://uepm-dev.sfo3.digitaloceanspaces.com/kzt78birpf21sriaktoyg4jduubi?response-content-disposition=inline%3B%20filename%3D%22staticmap%22%3B%20filename%2A%3DUTF-8%27%27staticmap&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=TEIB4WPTWDF6AMGMSWIW%2F20240301%2Fsfo3%2Fs3%2Faws4_request&X-Amz-Date=20240301T155735Z&X-Amz-Expires=1800&X-Amz-SignedHeaders=host&X-Amz-Signature=be17087d701f9f5408780fe19a95c5e2a2c08d22dceb0165f50f6ed32ba6a678',
    physicians: [],
    perks: [
      'Traslado incluido',
      'Viaticos incluidos',
      'Comidas sin cargo',
      'Gastos de acompañante pagos',
    ],
    site_image:
      'https://uepm-dev.sfo3.digitaloceanspaces.com/zf18ja2jr28n8zt3ma1y8vnaxv0p?response-content-disposition=inline%3B%20filename%3D%22siitio%20de%20prueba.webp%22%3B%20filename%2A%3DUTF-8%27%27siitio%2520de%2520prueba.webp&response-content-type=image%2Fwebp&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=TEIB4WPTWDF6AMGMSWIW%2F20240301%2Fsfo3%2Fs3%2Faws4_request&X-Amz-Date=20240301T155735Z&X-Amz-Expires=1800&X-Amz-SignedHeaders=host&X-Amz-Signature=8143fd726b77b77700cf65bc016c02cbef16ed598026192475d7f5c2cf3670dd',
    study_conditions: [
      '',
      'Cáncer de pulmón',
      'Carcinoma de células escamosas de cabeza y cuello',
      'Carcinoma de pulmón de células no pequeñas',
      'Hipercolesterolemia familiar',
    ],
    country: {
      id: 54,
      name: 'Argentina',
      phone_mask: '(###)####-####',
      iso_code: 'AR',
      phone_code: '54',
      flag: 'https://flagcdn.com/ar.svg',
      default_tz: '-0300',
      currency: 'ARS',
      default_rate_cents: null,
    },
  };
};
const selectedSite = Site();

export default function Page() {
  return <SitePreviewCardMobile site={selectedSite} />;
}
