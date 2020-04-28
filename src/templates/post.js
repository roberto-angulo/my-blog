import React from 'react';
import { graphql } from 'gatsby';

class Post extends React.Component {
    render() {
        const postData = this.props.data.wordpressPost;
        return(
            <h1>{postData.title}</h1>
        )
    }
}

export default Post;