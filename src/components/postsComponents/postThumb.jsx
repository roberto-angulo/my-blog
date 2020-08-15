import React from "react"
import { connect } from "react-redux"
import dataPosts from "../../data/index"
import cx from "classnames"
import Styling from "./postThumbStyles.module.scss"

const PostThumb = ({ posts }) => (
  <div className={(Styling.c_post_thumb, Styling.c_post_thumb_modifier)}>
    {posts.map(({ title, thumbnail, date }, index) =>
      index < 3 ? (
        <div className="row justify-content-center" key={title}>
          <div className="col-11 col-md-6 text-center text-md-left">
            <img
              src={thumbnail}
              alt="Post Thumnail"
              className={cx(Styling.thumbnail)}
            />
          </div>
          <div className="col-11 col-md-6">
            <div className="ml-md-2 pl-md-2">
              {title && (
                <h4
                  className={cx(
                    "text-white",
                    Styling.heading,
                    Styling.heading_modifier,
                    "text-center",
                    "text-md-left"
                  )}
                >
                  {title}
                </h4>
              )}
              <p className={cx("text-white", "text-center", "text-md-left")}>
                {date}
              </p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )
    )}
  </div>
)

const mapStoreToProps = state => ({
  posts: dataPosts.posts,
})

const PostThumbSmall = connect(mapStoreToProps)(PostThumb)
export default PostThumbSmall
