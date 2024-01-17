import { PropsWithClassName } from '../../types/core';

export type ShareNetworksProps = PropsWithClassName & {
  networks: string[];
  url: string;
  quote: string;
  tags: string[];
};

export type ShareProps = PropsWithClassName & {
  title?: string;
  description?: string;
  link: string;
  quote: string;
  tags: string[];
  networks: string[];
  copyText: string;
  copiedText: string;
  open: boolean;
  onClose: () => void;
};
