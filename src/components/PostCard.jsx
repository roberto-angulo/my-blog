import React from "react";
import PostCardStyles from "./styling/PostCard.module.scss";
import { Link } from "gatsby";
import cx from "classnames";

const PostCard = props => (
    <div className={cx( PostCardStyles.post_card, PostCardStyles.post_card_bg_gray,PostCardStyles.post_card_mt )}>
        {props.data.thumbnail && <img src={props.data.thumbnail} className="mw-100" />}
            <div className={ PostCardStyles.post_card_wrapper_text }>
                { props.data.title && <h3 className="font-weight-bold">{props.data.title}</h3> }
                { props.data.excerpt && <p className="pt-3">{props.data.excerpt}</p> }
                <p>
                    <Link to="/" className="btn BtnPrimary">Leer mas</Link>
                </p>
            </div>
    </div>
);

export default PostCard;