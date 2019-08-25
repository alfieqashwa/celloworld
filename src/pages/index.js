import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

export default ({ data }) => {
  console.log(data);

  return (
    <Layout>
      <h1>Blogs</h1>
      <h4>{data.allMdx.totalCount} Posts</h4>
      {data.allMdx.edges.map(({ node }) => (
        <div key={node.id}>
          <h3>
            {node.frontmatter.title} <span>- {node.frontmatter.date}</span>
          </h3>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
          }
          excerpt
        }
      }
    }
  }
`;
