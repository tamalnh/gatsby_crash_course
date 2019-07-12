/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it


const path = require('path');

exports.createPages = async ({boundActionCreators, graphql}) => {
    const {createPage} = boundActionCreators

    const posttemplate = path.resolve('src/templates/blog-post.js')

     const result = await graphql(`
        {
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
    `)
    // .then(res => {
    //     if(res.errors){
    //         return Promise.reject(res.errors)
    //     }

    //     res.data.allMarkdownRemark.edges.forEach(({node}) => {
    //         createPage({
    //             path: `blog/${node.frontmatter.path}`, //
    //             component: posttemplate
    //         })
    //     })
    // })

    const posts = result.data.allMarkdownRemark.edges
          posts.forEach(({node}) => {
            createPage({
                path: node.frontmatter.path, //
                component: posttemplate
            })
        })


    // 
     
}