import type { GatsbyConfig } from 'gatsby';
import * as path from 'path';

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://annawaltrip.com`,
    title: `Anna Waltrip`,
    author: `Anna Waltrip`,
    description: `Portfolio website of Anna Waltrip, full stack software engineer. A summary of professional skills, 
      project details, and contact information.`,
    image: 'src/images/thumbnail.PNG'
  },
  graphqlTypegen: true, // https://gatsby.dev/graphql-typegen
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@components': path.resolve(__dirname, 'src/components'),
          '@context': path.resolve(__dirname, 'src/context'),
          '@data': path.resolve(__dirname, 'src/data'),
          '@images': path.resolve(__dirname, 'src/images'),
          '@pages': path.resolve(__dirname, 'src/pages'),
          '@styles': path.resolve(__dirname, 'src/styles')
        },
        extensions: ['tsx', 'ts']
      }
    }
  ]
};

export default config;
