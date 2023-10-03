// export const SITES = [
//   "argentina",
//   "brasil",
//   "chile",
//   "colombia",
//   "peru",
//   "mexico",
// ];

export type Site = {
  id: string;
  name: string;
  specialists: number;
  clinics: number;
  cities: number;
  specialties: number;
};

export const SITES: Site[] = [
  {
    id: "argentina",
    name: "Argentina",
    specialists: 98,
    clinics: 52,
    cities: 26,
    specialties: 18,
  },
  {
    id: "brasil",
    name: "Brasil",
    specialists: 87,
    clinics: 49,
    cities: 32,
    specialties: 21,
  },
  {
    id: "chile",
    name: "Chile",
    specialists: 37,
    clinics: 39,
    cities: 12,
    specialties: 33,
  },
  {
    id: "peru",
    name: "Peru",
    specialists: 34,
    clinics: 56,
    cities: 31,
    specialties: 13,
  },
  {
    id: "colombia",
    name: "Colombia",
    specialists: 83,
    clinics: 42,
    cities: 37,
    specialties: 25,
  },
  {
    id: "mexico",
    name: "Mexico",
    specialists: 67,
    clinics: 89,
    cities: 43,
    specialties: 35,
  }
];
