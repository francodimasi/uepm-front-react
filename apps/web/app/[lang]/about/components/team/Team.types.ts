import { LocaleProps } from 'intl';
import { PropsWithClassName, Size } from 'ui/types/core';

export type TeamMember = {
  image?: string;
  name: string;
  role: string;
  about?: string;
};

export type TeamProps = PropsWithClassName &
  LocaleProps & {
    id?: string;
    board?: TeamMember[];
    staff?: TeamMember[];
  };

export type TeamMemberItemProps = PropsWithClassName &
  LocaleProps & {
    member: TeamMember;
    size?: Size;
    alignment?: 'start' | 'center' | 'end';
  };
