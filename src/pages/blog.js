import React from "react"
import PostsEntries from "../components/postsComponents/PostsEntries"
import Header from "../components/Header.jsx"

const Blog = () => (
  <>
    <Header />
    <div className="container">
      <div className="row">
        <h1 className="pt-4 pb-2 text-center w-100">Blog</h1>
      </div>
      <hr className="pb-2" />
      <div className="row">
        <PostsEntries />
      </div>
    </div>
  </>
)
export default Blog
