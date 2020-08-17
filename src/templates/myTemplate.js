import React from "react"
//import { graphql } from "gatsby"

const MyTemplate = props => {
  return <div>{console.log(props)}</div>
}
export default MyTemplate
/* 
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
` */
