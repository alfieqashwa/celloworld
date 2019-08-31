import merge from 'deepmerge';
import typography from './typography';
import colors from './colors';
import styles from './styles';
import prism from './prism';

export default merge(typography, {
  initialColorMode: `light`,
  colors,
  breakpoints: ['40em', '52em', '64em'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    heading: 'Montserrat, sans-serif',
    body: 'Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace',
    monospace: 'Menlo, monospace',
  },
  sizes: {
    container: 672,
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 900,
    bold: 700,
  },
  lineHeights: {
    body: 1.625,
    heading: 1.25,
  },
  useCustomProperties: true,
  initialColorMode: 'light',
  styles,
  prism,
});
