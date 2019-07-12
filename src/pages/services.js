import React from 'react';
import { Link } from "gatsby"
import Layout from "../components/layout" 
import SEO from "../components/seo"

const Services = ({title}) => {
    return ( 
        <Layout>
            <SEO title="Services" />
            <div>
                <h1>Services</h1> 
                <p>There are so many ways to add styles to your website; Gatsby supports almost every possible option, through official and community plugins.</p>
                <p>There are so many ways to add styles to your website; Gatsby supports almost every possible option, through official and community plugins.</p>
                <p>There are so many ways to add styles to your website; Gatsby supports almost every possible option, through official and community plugins.</p>
            </div>
            <Link to="/">Go to home page</Link>
        </Layout>
        
     );
}
 
export default Services;