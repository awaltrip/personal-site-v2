import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import { Layout }  from '@components'

const docLinks = [
  {
    text: "TypeScript Documentation",
    url: "https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/",
    color: "#8954A8",
  },
  {
    text: "GraphQL Typegen Documentation",
    url: "https://www.gatsbyjs.com/docs/how-to/local-development/graphql-typegen/",
    color: "#8954A8",
  }
]

const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/getting-started/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  }
]

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout 
      heading="Hi, my name is"
      headingAccent="Anna Waltrip"
    >
      <p>I'm a full-stack software engineer specializing in building exceptional user experiences on the web.</p>
    </Layout>
  )
}

export const Head: HeadFC = () => (
  <>
    <title>Anna Waltrip's Portfolio Site - Home</title>
    <meta name="description" content="Anna Waltrip portfolio website home page"/>
  </>
)

export default IndexPage
