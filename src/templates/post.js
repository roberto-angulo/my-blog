import React from "react"
import { Header } from "../components"

const Post = props => {
  const heroImageStyles = {
    backgroundImage: `url(${props.pageContext.data.thumbnail})`,
    backgroundRepeat: `no-repeat`,
    backgroundSize: `cover`,
    backgroundPosition: 0,
    height: `19rem`,
  }
  return (
    <>
      <Header />

      <div className="w-100" style={heroImageStyles}></div>

      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-10">
            {/*   <h1
            dangerouslySetInnerHTML={{ __html: this.fetchingPosts().title }}
          ></h1>
          <div
            dangerouslySetInnerHTML={{ __html: this.fetchingPosts().content }}
          ></div> */}

            <h1>{props.pageContext.data.title}</h1>

            <div dangerouslySetInnerHTML={{ __html: props.pageContext.body }} />
          </div>
        </div>
      </div>
    </>
  )
}
export default Post
