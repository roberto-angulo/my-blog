import React from "react"
import cx from "classnames"
import Styling from "./postThumbStyles.module.scss"
import { StaticQuery, graphql } from "gatsby"

const PostThumbSmall = () => (
  <div>
    <StaticQuery
      query={graphql`
        {
          allMarkdownRemark {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  title
                  description
                  date
                  thumbnail
                }
              }
            }
          }
        }
      `}
      render={({ allMarkdownRemark: { edges: edges } }) => {
        return (
          <div
            className={(Styling.c_post_thumb, Styling.c_post_thumb_modifier)}
          >
            {edges.map(({ node }, index) => {
              return index < 3 ? (
                <div
                  className="row justify-content-center"
                  key={`postThumbnail_${index}`}
                >
                  <div className="col-11 col-md-6 text-center text-md-left">
                    <img
                      src={node.frontmatter.thumbnail}
                      alt="Post Thumnail"
                      className={cx(Styling.thumbnail)}
                    />
                  </div>
                  <div className="col-11 col-md-6">
                    <div className="ml-md-2 pl-md-2">
                      {node.frontmatter.title && (
                        <h4
                          className={cx(
                            "text-white",
                            Styling.heading,
                            Styling.heading_modifier,
                            "text-center",
                            "text-md-left"
                          )}
                        >
                          {node.frontmatter.title}
                        </h4>
                      )}
                      <p
                        className={cx(
                          "text-white",
                          "text-center",
                          "text-md-left"
                        )}
                      >
                        {node.frontmatter.date.substring(0, 10)}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )
            })}
          </div>
        )
      }}
    />
  </div>
)
export default PostThumbSmall
