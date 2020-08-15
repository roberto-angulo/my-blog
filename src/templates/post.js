import React from 'react';
import blogStore from '../storeReducers/postsReducer';
import { connect } from "react-redux";
import { graphql } from 'gatsby';

export default class Post extends React.Component {
   constructor() {
        super();
        this.myStore = blogStore();
        this.state = {
            posts: []
        }
   }

    fetchingPosts() {
        const data = this.props.pageContext ? this.props.pageContext.data : null;
        if( data ) {
            return data;
        }
        return data;
    }

    unsubscribe() {
        this.myStore.subscribe( () => console.log( this.myStore.getState() ) )
    }

    componentDidMount() {
        const posts = this.fetchingPosts();
        this.myStore.dispatch( { type: 'GETTING_POSTS', posts } );
    }

    render() {
        /* this.unsubscribe(); */
        return(
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-10">
                        <h1 dangerouslySetInnerHTML={ {__html:this.fetchingPosts().title} }></h1>
                        <div dangerouslySetInnerHTML={{ __html:this.fetchingPosts().content} }></div>
                    </div>
                </div>
            </div>
        )
    }
}


/* export const postQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
    }
  }`;
 */