import React from "react"
import { graphql, Link } from "gatsby"
import PageHeaders from "../components/pageHeaders"
import Layout from "../components/layout"
import { Button } from "../components/shared/button"
import Img from "gatsby-image"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  const featuredimage = post.frontmatter.featured.src
  const featuredImageAlt = post.frontmatter.featured.alt
  return (
    <Layout>
      <PageHeaders>
        <h1 className="text-3xl text-white">{post.frontmatter.title}</h1>
        <small className="text-white">
          {post.frontmatter.author} - {post.frontmatter.date}
        </small>
      </PageHeaders>
      <div className="container max-w-screen-md mx-auto p-8 m-5 shadow-lg">
        <Img
          className="rounded-xl"
          fluid={featuredimage.childImageSharp.fluid}
          alt={featuredImageAlt}
        />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <Link className="mt-10 block" to="/blog">
          <Button>Back</Button>
        </Link>
      </div>
    </Layout>
  )
}
export const query = graphql`
  query BlogQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(fromNow: true)
        author
        featured {
          src {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          alt
        }
      }
    }
  }
`
