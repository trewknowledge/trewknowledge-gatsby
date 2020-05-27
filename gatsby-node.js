/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const slash = require('slash');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;

  // createRedirect({ fromPath: '/', toPath: '/home', redirectInBrowser: true, isPermanent: true })

  const pageTemplate = path.resolve('./src/templates/page.js');
  const postTemplate = path.resolve('./src/templates/post.js');
  const homePageTemplate = path.resolve('./src/templates/home.js');
  const searchPageTemplate = path.resolve('./src/templates/searchPage.js');
  // const bookPostTemplate = path.resolve('./src/templates/bookCustomPost.js');
  const archiveNews = path.resolve('./src/templates/archive-news.js');

  const result = await graphql(`
    {
      wpgraphql {
        pages(first: 100) {
          nodes {
            title
            id
            uri
            content
            link
          }
        }
        posts {
          nodes {
            id
            uri
            slug
            title
            content
            excerpt
            date
            featuredImage {
              sourceUrl
            }
          } 
        }
        readingSettings {
          postsPerPage
        }
      }
    }
  `)

  if (result.errors) {
    throw new Error(result.errors)
  }

  const { 
    pages,
    posts,
    readingSettings
  }  = result.data.wpgraphql;

  // WP default pages
  pages.nodes.forEach(node => {
    // if (node.template.__typename === 'WPGraphQL_HomeTemplate') {
    //   createPage({
    //     path: `/${node.slug}`,
    //     component: slash(homePageTemplate),
    //     context: node
    //   })
    // } else if (node.template === 'WPGraphQL_SearchTemplate') {
    //   createPage({
    //     path: `/${node.slug}`,
    //     component: slash(searchPageTemplate),
    //     context: node
    //   })
    // } else {
      createPage({
        path: node.uri,
        component: slash(pageTemplate),
        context: node
      })
    // }
  })

  // WP archive for default posts
  const defaultPosts = posts.nodes;
  const postsPerPage = readingSettings.postsPerPage;
  const numberOfPages = Math.ceil(defaultPosts.length / postsPerPage )

  Array.from({ length: numberOfPages }).forEach((page, index) => {
    createPage({
      component: slash(archiveNews),
      path: index === 0 ? `/news` : `/news/${index + 1}`,
      context: {
        posts: defaultPosts.slice(index * postsPerPage, (index * postsPerPage) + postsPerPage),
        numberOfPages,
        currentPage: index + 1
      }
    })
  })

  // WP default posts
  posts.nodes.forEach(node => {
    createPage({
      path: node.uri,
      component: slash(postTemplate),
      context: node
    })
  })

  // WP custom post type
  // allWordpressWpGstBook.edges.forEach(edge => {
  //   createPage({
  //     path: `/book/${edge.node.slug}`,
  //     component: slash(bookPostTemplate),
  //     context: edge.node
  //   })
  // })
}
