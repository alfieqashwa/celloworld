/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui';

export default props => {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <button
      sx={{
        variant: 'buttons.primary',
      }}
      onClick={e => {
        setColorMode(colorMode === 'light' ? 'dark' : 'light');
      }}
    >
      {colorMode === 'light' ? 'Dark' : 'Light'}{' '}
    </button>
  );
};
