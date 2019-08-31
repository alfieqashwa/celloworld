/** @jsx jsx */
import { jsx } from 'theme-ui';
import { preToCodeBlock } from 'mdx-utils';
import PrismCodeBlock from '@theme-ui/prism';

import headings from '../components/headings';

const codeBlock = preProps => {
  const props = preToCodeBlock(preProps);

  if (props) {
    const { codeString, ...restProps } = props;

    return (
      <div sx={{ mb: 2 }}>
        <PrismCodeBlock {...restProps}>{codeString}</PrismCodeBlock>
      </div>
    );
  } else {
    return <pre {...preProps} />;
  }
};

export default {
  pre: codeBlock,
  ...headings,
};
