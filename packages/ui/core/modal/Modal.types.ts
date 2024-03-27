import { PropsWithChildren } from 'react';
import { PropsWithClassName } from '../../types/core';

export type ModalProps = PropsWithChildren &
  PropsWithClassName & {
    title?: string;
    open: boolean;
    showClose?: boolean;
    backdropDismiss?: boolean;
    onClose: () => void;
  };
