import type { GatsbyConfig } from 'gatsby';

const path = require('path');

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://annawaltrip.com`,
    title: `Anna Waltrip`,
    description: `Portfolio website of Anna Waltrip, full stack software engineer. A summary of professional skills, 
      project details, and contact information.`,
    image: ''
  },
  graphqlTypegen: true, // https://gatsby.dev/graphql-typegen
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@components': path.resolve(__dirname, 'src/components'),
          '@data': path.resolve(__dirname, 'src/data'),
          '@images': path.resolve(__dirname, 'src/images'),
          '@pages': path.resolve(__dirname, 'src/pages'),
          '@styles': path.resolve(__dirname, 'src/styles')
        },
        extensions: ['tsx', 'ts', 'jsx', 'js']
      }
    }
  ]
};

export default config;
