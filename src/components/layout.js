/** @jsx jsx */
import { jsx, Layout, Header, Main, Container, Footer } from 'theme-ui';

export default ({ children }) => (
  <Layout>
    <Header>
      <Container>Celloworld</Container>
    </Header>
    <Main>
      <Container>{children}</Container>
    </Main>
    <Footer>Celloworld @2019</Footer>
  </Layout>
);
