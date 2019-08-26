/** @jsx jsx */
import { jsx, Styled, Layout, Main, Container, Footer } from 'theme-ui';
import { Global } from '@emotion/core';

import Header from './header';

export default props => (
  <Styled.root>
    <Global
      styles={{
        '*': {
          boxSizing: 'border-box',
        },
        body: {
          margin: 0,
        },
      }}
    />
    <Layout>
      <Header>
        <Container>Celloworld</Container>
      </Header>
      <Main>
        <Container>{props.children}</Container>
      </Main>
      <Footer>Celloworld @2019</Footer>
    </Layout>
  </Styled.root>
);
