import React from 'react';
import { graphql } from 'gatsby';
class Page extends React.Component {
    render() {
        const {content, title} = this.props.pageContext.data;
        return(

            <div>
                <h1>{ title }</h1>

                <div dangerouslySetInnerHTML={ { __html: content } } />
            </div>
        )
    }
}
export default Page;