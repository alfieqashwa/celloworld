/** @jsx jsx */
import { Link } from 'gatsby';
import { jsx, Styled } from 'theme-ui';

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
      <Styled.a
        as={Link}
        to="/"
        sx={{
          variant: 'styles.navlink',
          px: 3,
          py: 1,
          // textTransform: 'uppercase',
          letterSpacing: '0.1em',
          border: '2px solid',
          color: 'primary',
        }}
      >
        Cello<span style={{ color: 'hotpink' }}>world</span>
      </Styled.a>
    </div>
    <div
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
      }}
    >
      <Styled.a
        as={Link}
        to="/notes"
        sx={{
          variant: 'styles.navlink',
          ml: 3,
          py: 3,
        }}
      >
        Notes
      </Styled.a>
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
