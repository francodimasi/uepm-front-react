export type ContactSiteFormModalProps = {
  title?: string;
  isDoctor: boolean;
  open?: boolean;
  onClose: () => void;
};

export type ContactSiteFormModalRequest = {
  name: string;
  email: string;
  phone: string;
  query: string;
  specialty: string;
  sponsor: string;
};

export type ContactUsSiteFormApiRequest = ContactSiteFormModalRequest & {
  isDoctor: boolean;
};
