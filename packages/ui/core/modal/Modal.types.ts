import { PropsWithChildren } from 'react';

export type ModalProps = PropsWithChildren & {
  panelClassname?: string;
  title?: string;
  open: boolean;
  onClose: () => void;
};
