export type Physician = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  description: string;
  role: string;
  avatar: string;
  affiliation: PhysicianAffiliation;
};

type PhysicianAffiliation = {
  id: number;
  role: string;
};
