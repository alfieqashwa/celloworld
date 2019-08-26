/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';

export default () => (
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
        to="/blog"
        sx={{
          variant: 'styles.navlink',
          ml: 3,
          py: 3,
        }}
      >
        Notes
      </Link>
    </div>
  </header>
);
