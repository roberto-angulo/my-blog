import React, { useEffect, useState } from "react";
import { Link, useStaticQuery, graphql } from 'gatsby';
import axios from "axios";
import WrapperApp from "../components/WrapperApp";
/* import gettingData from "../api/index"; */

const IndexPage = () => {
/*     const data = useStaticQuery( graphql`
        query {
            site {
                siteMetaData {
                    title
                }
            }        
        }` 
    ); */

    const title = 'Roberto Angulo - Front End developer';
    const [posts, setPosts] = useState([]);

    const gettingTheData = () => {
        try {
            const endpoint = `https://anguloroberto.com.ve/dev/wp-json/wp/v2/posts`;
            return axios.get(endpoint);
        } catch( error ) {
            return error;
        }
    }

    /* useEffect(
        () => {
            const data = gettingTheData()
            .then( response => 
                setPosts( [...response.data] )
            )
            .catch( error => console.log( error ) )
    }, [])

    useEffect(
        () => {
            console.log( posts );
        }, [posts]) */

    
    return (
        <div className="container">
            <div className="row">
                <h1>{ title }</h1>
            </div>

            <p>
                <Link to="/contact">Contact</Link>
            </p>
        </div>
)};

const HomepageComponent = () => <WrapperApp><IndexPage /></WrapperApp>;

export default HomepageComponent;