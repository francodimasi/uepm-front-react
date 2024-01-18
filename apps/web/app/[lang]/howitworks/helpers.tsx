import { ApplyIcon, SearchIcon, TakePartIcon } from './icons';

export const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'apply': {
      return <ApplyIcon />;
    }
    case 'search': {
      return <SearchIcon />;
    }
    case 'takepart': {
      return <TakePartIcon />;
    }
    default: {
      return <ApplyIcon />;
    }
  }
};
