/** @jsx jsx */
import { jsx, Layout, Main, Container, Footer } from 'theme-ui';
import { Styled } from 'theme-ui';

import Header from './header';

export default ({ children }) => (
  <Layout>
    <Header>
      <Container>Celloworld</Container>
    </Header>
    <Main>
      <Container>
        <Styled.root>{children}</Styled.root>
      </Container>
    </Main>
    <Footer>Celloworld @2019</Footer>
  </Layout>
);
