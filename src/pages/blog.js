import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { Button } from "../components/shared/button"
import PageHeaders from "../components/pageHeaders"
import Img from "gatsby-image"

export default function Blog({ data }) {
  const { posts } = data.blog

  return (
    <Layout>
      <PageHeaders>
        <h1 className="text-white text-4xl">Blog</h1>
      </PageHeaders>
      <div className="container max-w-screen-xl mx-auto py-20">
        <div className="flex flex-col md:flex-row">
          {posts.map(post => {
            const featuredimage = post.frontmatter.featured.src
            const featuredImageAlt = post.frontmatter.featured.alt
            return (
              <article className="md:w-6/12 m-5 bg-white shadow-lg rounded-xl" key={post.id}>
                <Img
                  className="rounded-xl"
                  fluid={featuredimage.childImageSharp.fluid}
                  alt={featuredImageAlt}
                />

                <div className="p-5">
                  <h2 className="text-2xl font-bold">
                    {post.frontmatter.title}
                  </h2>

                  <small>
                    {post.frontmatter.author} - {post.frontmatter.date}
                  </small>
                  <p className="py-5">{post.excerpt}</p>
                  <Link to={post.fields.slug}>
                    <Button href={post.fields.slug}>Read more</Button>
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query MyQuery {
    blog: allMarkdownRemark {
      posts: nodes {
        fields {
          slug
        }
        frontmatter {
          date(fromNow: true)
          title
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
        excerpt
        id
      }
    }
  }
`
