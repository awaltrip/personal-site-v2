import type { GatsbyConfig } from 'gatsby';

const path = require('path');

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  // https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@components': path.resolve(__dirname, 'src/components'),
          '@images': path.resolve(__dirname, 'src/images'),
          '@pages': path.resolve(__dirname, 'src/pages'),
          '@styles': path.resolve(__dirname, 'src/styles')
        },
        extensions: [
          'tsx',
          'ts',
          'js'
        ]
      }
    }
  ]
};

export default config;
