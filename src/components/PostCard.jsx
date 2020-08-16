import React from "react"
import PostCardStyles from "./styling/PostCard.module.scss"
import { Link } from "gatsby"
import cx from "classnames"

const PostCard = ({ data: { frontmatter } }) => {
  return (
    <div
      className={cx(
        PostCardStyles.post_card,
        PostCardStyles.post_card_bg_gray,
        PostCardStyles.post_card_mt
      )}
    >
      {frontmatter.thumbnail && (
        <img src={frontmatter.thumbnail} className="mw-100" />
      )}
      <div className={PostCardStyles.post_card_wrapper_text}>
        {frontmatter.title && (
          <h3 className="font-weight-bold">{frontmatter.title}</h3>
        )}
        {frontmatter.description && (
          <p className="pt-3">{frontmatter.description}</p>
        )}
        <p>
          <Link to="/" className="btn BtnPrimary">
            Leer mas
          </Link>
        </p>
      </div>
    </div>
  )
}

export default PostCard
