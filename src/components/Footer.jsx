import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Footer = () => {
/* 
    const data = useStaticQuery( graphql`
        query {
            site {
                siteMetaData {
                    url
                }
            }
        }
    ` ); */

    /* const { url } = data.site.siteMetaData; */
    
    const url = 'https://anguloroberto.com.ve';

    return (
        <div>
            Deveped by <a href={ url } title={ url } target="__blank">Roberto Angulo</a>
        </div>
)};

export default Footer;