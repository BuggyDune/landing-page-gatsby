import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import { Button } from "../shared/button"
import Img from "gatsby-image"

const HomePosts = () => {
  const data = useStaticQuery(
    graphql`
      query BlogList {
        allMarkdownRemark(
          limit: 3
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
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
            }
          }
        }
      }
    `
  )
  const { allMarkdownRemark } = data
  return (
    <div className="container max-w-screen-xl mx-auto py-20">
      <div className="grid md:grid-cols-3 gap-8">
        {allMarkdownRemark.edges.map(({ node }) => (
          <article className="bg-white shadow-lg rounded-xl">
            <Img
              className="rounded-xl"
              fluid={node.frontmatter.featured.src.childImageSharp.fluid}
              alt={node.frontmatter.featured.alt}
            />
            <div className="p-5">
              <h2 className="text-2xl font-bold">{node.frontmatter.title}</h2>

              <small>
                {node.frontmatter.author} - {node.frontmatter.date}
              </small>
              <p className="py-5">{node.excerpt}</p>
              <Link to={node.fields.slug}>
                <Button href={node.fields.slug}>Read more</Button>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default HomePosts
