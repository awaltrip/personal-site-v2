import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

interface SeoProps {
  pageName: String;
  children?: any;
}

interface SiteMetadata {
  title: string;
  author: string;
  description: string;
  siteUrl: string;
  image?: string;
}

const getSiteMetadata = (): SiteMetadata => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            image
            siteUrl
          }
        }
      }
    `
  );

  return site?.siteMetadata;
};

const Seo: React.FC<SeoProps> = ({ pageName, children }) => {
  const { title, author, description, image, siteUrl: url } = getSiteMetadata();

  return (
    <>
      <title>{`${title} - ${pageName}`}</title>
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      <meta name="image" content={image} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {children}
    </>
  )
};

export default Seo;
