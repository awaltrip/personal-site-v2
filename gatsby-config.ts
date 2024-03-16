import type { GatsbyConfig } from 'gatsby';
import * as path from 'path';

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://annawaltrip.com`,
    title: `Anna Waltrip`,
    author: `Anna Waltrip`,
    description: `Portfolio website of Anna Waltrip, full stack software engineer. A summary of professional skills, 
      project details, and contact information.`,
    image: 'src/images/thumbnail.png',
    navLinks: [
      {
        name: 'Home',
        path: '/'
      },
      {
        name: 'About',
        path: '/about'
      },
      {
        name: 'Skills',
        path: '/skills'
      },
      {
        name: 'Projects',
        path: '/projects'
      },
      {
        name: 'Contact',
        path: '/contact'
      }
    ]
  },
  graphqlTypegen: true, // https://gatsby.dev/graphql-typegen
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-mdx`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
         name: 'images',
         path: `${__dirname}/src/images/`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
         name: 'projects',
         path: `${__dirname}/src/data/projects`
      }
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@components': path.resolve(__dirname, 'src/components'),
          '@context': path.resolve(__dirname, 'src/context'),
          '@data': path.resolve(__dirname, 'src/data'),
          '@images': path.resolve(__dirname, 'src/images'),
          '@pages': path.resolve(__dirname, 'src/pages'),
          '@styles': path.resolve(__dirname, 'src/styles'),
          '@utils': path.resolve(__dirname, 'src/utils')
        },
        extensions: ['tsx', 'ts']
      }
    }
  ]
};

export default config;
