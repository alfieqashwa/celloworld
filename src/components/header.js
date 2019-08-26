/** @jsx jsx */
import { Link } from 'gatsby';
import { jsx, useColorMode } from 'theme-ui';

import Switch from './switch';

export default props => (
  <header
    sx={{
      display: 'grid',
      gridGap: 3,
      gridTemplateColumns: 'repeat(3, 1fr)',
      px: 3,
      py: 1,
      alignItems: 'center',
      variant: 'styles.header',
    }}
  >
    <div
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Link
        to="/"
        sx={{
          variant: 'styles.navlink',
          px: 3,
          py: 1,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          border: '4px solid',
          color: 'primary',
        }}
      >
        Celloworld
      </Link>
    </div>
    <div
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
      }}
    >
      <Link
        to="/notes"
        sx={{
          variant: 'styles.navlink',
          ml: 3,
          py: 3,
        }}
      >
        Notes
      </Link>
    </div>
    <div
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
      }}
    >
      <Switch />
    </div>
  </header>
);
