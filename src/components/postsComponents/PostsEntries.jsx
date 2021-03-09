import React from "react"
import { StaticQuery, graphql } from "gatsby"
import PostCard from "../PostCard"
import BioComponent from "../bioComponent/BioComponent"
import cx from "classnames"
import BioComponentStyle from "../bioComponent/bioComponent.module.scss"
import data from "../../data"
const PostsEntries = ({ showBio = false }) => (
  <>
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
        return edges.map(({ node }, index) => {
          return (
            <>
              <div className="col-11 col-md-8 col-xl-4">
                <PostCard
                  key={`postCard_${index}`}
                  data={node}
                  dataSite={data}
                />
              </div>
              {index == 1 && showBio ? (
                <div
                  className={cx(
                    "col-xl-3",
                    "ml-auto",
                    BioComponentStyle.homeSidebar
                  )}
                >
                  <BioComponent descriptionColor="white" card="true" />
                </div>
              ) : (
                ""
              )}
            </>
          )
        })
      }}
    />
  </>
)
export default PostsEntries
