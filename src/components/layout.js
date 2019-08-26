/** @jsx jsx */
import { jsx, Styled, Layout, Main, Container, Footer } from 'theme-ui';

import Header from './header';

export default ({ children }) => (
  <Styled.root>
    <Layout>
      <Header>
        <Container>Celloworld</Container>
      </Header>
      <Main>
        <Container>{children}</Container>
      </Main>
      <Footer>Celloworld @2019</Footer>
    </Layout>
  </Styled.root>
);
