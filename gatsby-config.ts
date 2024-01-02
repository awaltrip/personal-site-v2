import type { GatsbyConfig } from 'gatsby';

const path = require('path');

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://awaltrip.netlify.app`
  },
  // https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@components': path.resolve(__dirname, 'src/components'),
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
