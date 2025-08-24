iimport { useOauth2 } from '@/hooks/auth/useOauth2';
import {
    LegacyLogout1pxIcon,
} from '@deriv/quill-icons/Legacy';

filter(Boolean) as TMenuConfig,
        client?.is_logged_in
            ? [
                  {
                      as: 'button',
                      label: localize('Log out'),
                      LeftComponent: LegacyLogout1pxIcon,
                      onClick: oAuthLogout,
                      removeBorderBottom: true,
                  },
              ]
            

export default logout;
