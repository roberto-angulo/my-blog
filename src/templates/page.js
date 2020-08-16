import React from "react"
import { graphql } from "gatsby"
class Page extends React.Component {
  render() {
    return <div>{console.log(this.props)}</div>
  }
}
export default Page
