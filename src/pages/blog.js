import React from 'react';
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = ({ data }) => {
    
    return (
        <Layout>
            <SEO title="About" />
            <div>
                <h1>Latest Post</h1>
                {data.allMarkdownRemark.edges.map(post => (
                    <div key={post.node.id}> 
                        <h3>{post.node.frontmatter.title}</h3>
                        <small>Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
                        <br />
                        <br />
                        <Link to={post.node.frontmatter.path}>Read More</Link>
                        <br />
                        <br />
                        <hr />
                    </div>
                ))}
            </div>
        </Layout>

    );
}

export const pageQuery = graphql`
    query  BlogIndexQuery{ 
            allMarkdownRemark{
                totalCount
                edges{
                node {
                        id
                        frontmatter {
                            title
                            path
                            date
                            author
                        }
                    }
                }
            } 
    }
`

export default Blog;