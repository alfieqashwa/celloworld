export default {
  root: {
    fontFamily: 'body',
  },
  pre: {
    variant: `prism`,
    fontFamily: 'monospace',
    tabSize: 4,
    hyphens: `none`,
    marginBottom: 2,
    color: `white`,
    bg: `prism.background`,
    overflow: `auto`,
    borderRadius: 10,
    p: 3,
  },
  code: {
    fontFamily: `monospace`,
    fontSize: 'inherit',
  },
  inlineCode: {
    borderRadius: `0.3em`,
    color: `secondary`,
    bg: `highlight`,
    paddingTop: `0.15em`,
    paddingBottom: `0.05em`,
    paddingX: `0.2em`,
  },
  a: {
    color: 'primary',
    textDecoration: 'none',
    ':hover': {
      color: 'secondary',
      // textDecoration: 'underline',
    },
  },
  hr: {
    borderColor: `muted`,
  },
  p: {
    code: {
      fontSize: `inherit`,
    },
  },
  li: {
    code: {
      fontSize: `inherit`,
    },
  },
  blockquote: {
    color: `inherit`,
    borderLeftColor: `inherit`,
    opacity: 0.8,
    '&.translation': {
      fontSize: `1em`,
    },
  },
  h1: {
    color: 'text',
    fontFamily: 'heading',
    lineHeight: '1.2',
    fontWeight: 'heading',
    fontSize: 5,
  },
  h2: {
    color: 'text',
    fontFamily: 'heading',
    lineHeight: '1.2',
    fontWeight: 'heading',
    fontSize: 4,
  },
  h3: {
    color: 'text',
    fontFamily: 'heading',
    lineHeight: '1.2',
    fontWeight: 'heading',
    fontSize: 3,
  },
  h4: {
    color: 'text',
    fontFamily: 'heading',
    lineHeight: '1.2',
    fontWeight: 'heading',
    fontSize: 2,
  },
  h5: {
    color: 'text',
    fontFamily: 'heading',
    lineHeight: '1.2',
    fontWeight: 'heading',
    fontSize: 1,
  },
  h6: {
    color: 'text',
    fontFamily: 'heading',
    lineHeight: '1.2',
    fontWeight: 'heading',
    fontSize: 0,
  },
  p: {
    color: 'text',
    fontFamily: 'body',
    fontWeight: 'body',
    lineHeight: 'body',
  },
  table: {
    width: '100%',
    borderCollapse: 'separate',
    borderSpacing: 0,
  },
  th: {
    textAlign: 'left',
    borderBottomStyle: 'solid',
  },
  td: {
    textAlign: 'left',
    borderBottomStyle: 'solid',
  },
  img: {
    maxWidth: '100%',
    height: 'auto',
  },
};
