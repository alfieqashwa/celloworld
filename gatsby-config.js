module.exports = {
  siteMetadata: {
    title: `Celloworld`,
    author: `Alfie Qashwa`,
    description: `Alfie Qashwa || Celloworld`,
    siteUrl: `https://www.alfieqashwa.me`,
    social: {
      twitter: `alfieqashwa`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blogs`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/content/assets`,
      },
    },
    `gatsby-plugin-mdx`,
  ],
};
