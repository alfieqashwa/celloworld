/** @jsx jsx */
import { Link, graphql } from 'gatsby';
import { jsx, Styled } from 'theme-ui';

import Layout from '../components/layout';

const BlogIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMdx.edges;

  return (
    <Layout title={siteTitle}>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;
        return (
          <div key={node.fields.slug}>
            <Styled.h1>
              <Styled.a as={Link} to={node.fields.slug}>
                {title}
              </Styled.a>
            </Styled.h1>
            <small>{node.frontmatter.date}</small>
            <Styled.p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </div>
        );
      })}
    </Layout>
  );
};

export default BlogIndex;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`;
