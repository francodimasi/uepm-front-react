export type Physician = {
  affiliation: PhysicianAffiliation;
  email: string;
  first_name: string;
  id: number;
  last_name: string;
  specializations: string[]
  verified: boolean;
};

type PhysicianAffiliation = {
  id: number;
  role: string;
};
