import React from "react"

const Post = props => {
  /* this.unsubscribe(); */
  console.log(props)
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-10">
          {/*   <h1
            dangerouslySetInnerHTML={{ __html: this.fetchingPosts().title }}
          ></h1>
          <div
            dangerouslySetInnerHTML={{ __html: this.fetchingPosts().content }}
          ></div> */}

          <div dangerouslySetInnerHTML={{ __html: props.pageContext.body }} />
        </div>
      </div>
    </div>
  )
}
export default Post
