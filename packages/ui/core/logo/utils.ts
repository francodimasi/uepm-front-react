import ttColorLogo from 'ui/assets/logo/tt/tt-logo-color.svg';
import ttDarkLogo from 'ui/assets/logo/tt/tt-logo-dark.svg';
import ttLightLogo from 'ui/assets/logo/tt/tt-logo-light.svg';
import uepmDarkLogo from 'ui/assets/logo/uepm/uepm-logo-dark.svg';
import uepmLightLogo from 'ui/assets/logo/uepm/uepm-logo-light.svg';

export const getLogo = (brand: string, type: string = 'color') => {
  if (brand === 'tt') {
    switch (type) {
      case 'color':
        return ttColorLogo;
      case 'dark':
        return ttDarkLogo;
      case 'light':
        return ttLightLogo;
    }
  } else {
    switch (type) {
      case 'dark':
        return uepmDarkLogo;
      case 'color':
      case 'light':
        return uepmLightLogo;
    }
  }
};
