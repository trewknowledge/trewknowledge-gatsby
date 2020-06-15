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

  const careersTemplate = path.resolve('./src/templates/careersTemplate.js');
  const archiveNews = path.resolve('./src/templates/archive-news.js');
  const archiveWorks = path.resolve('./src/templates/archive-works.js');
  const archivePositions = path.resolve('./src/templates/archive-positions.js');
  const positionsSingle = path.resolve('./src/templates/positions-single.js');

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
            template {
              ... on WPGraphQL_CareersTemplate {
                templateName
              }
            }
          }
        }
        posts(first: 100) {
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
        tk_works(first: 100) {
          nodes {
            id
            uri
            slug
            title
            content
            date
            featuredImage {
              sourceUrl
            }
          }
        }
        tk_positions {
          nodes {
            id
            uri
            slug
            title
            content
            excerpt
            date
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
    tk_works,
    tk_positions,
    readingSettings
  }  = result.data.wpgraphql;

  // WP default pages
  pages.nodes.forEach(node => {
    if (node.template.templateName === 'Careers') {
      createPage({
        path: node.uri,
        component: slash(careersTemplate),
        context: {
          node: node,
          headerStyle: 'blue',
        }
      })
    // } else if (node.template === 'WPGraphQL_SearchTemplate') {
    //   createPage({
    //     path: `/${node.slug}`,
    //     component: slash(searchPageTemplate),
    //     context: node
    //   })
    } else {
      createPage({
        path: node.uri,
        component: slash(pageTemplate),
        context: node
      })
    }
  })

// ------------- Posts Archive Constructor ------------- 
const createArchive = (archiveConfigObject) => {
  const archivePosts = archiveConfigObject.postsArray;
  const postsPerPage = archiveConfigObject.postsPerPage;
  const numberOfPages = Math.ceil(archivePosts.length / postsPerPage);
  const allPosts = archiveConfigObject.allPosts;
  const headerStyle = archiveConfigObject.headerStyle;

  Array.from({ length: numberOfPages }).forEach((page, index) => {
    createPage({
      component: slash(archiveConfigObject.pageTemplate),
      path: index === 0 ? `${archiveConfigObject.path}` : `${archiveConfigObject.path}/${index + 1}`,
      context: {
        posts: archivePosts.slice(index * postsPerPage, (index * postsPerPage) + postsPerPage),
        numberOfPages,
        currentPage: index + 1,
        archivePath: archiveConfigObject.path,
        archiveTitle: archiveConfigObject.archiveTitle,
        allPosts: allPosts,
        headerStyle: headerStyle,
      }
    })
  })
}

// ------------- Archive Config Objects -------------

const newsArchiveConfig = {
  postsArray: posts.nodes,
  postsPerPage: readingSettings.postsPerPage, 
  pageTemplate: archiveNews,
  path: '/news',
  archiveTitle: 'News',
  allPosts: posts
}

const worksArchiveConfig = {
  postsArray: tk_works.nodes,
  postsPerPage: 9, 
  pageTemplate: archiveWorks,
  path: '/work',
  archiveTitle: 'Work',
  allPosts: tk_works
}

const positionsArchiveConfig = {
  postsArray: tk_positions.nodes,
  postsPerPage: 9, 
  pageTemplate: archivePositions,
  path: '/positions',
  archiveTitle: 'Careers',
  allPosts: posts.nodes.slice(0, 2),
  headerStyle: "empty" 
}

// ------------- Create archive pages -------------
createArchive(newsArchiveConfig);
createArchive(worksArchiveConfig);
createArchive(positionsArchiveConfig);

// ------------- Create posts pages -------------
  posts.nodes.forEach(node => {
    createPage({
      path: node.uri,
      component: slash(postTemplate),
      context: {
        node: node,
        allWorks: tk_works,
        pageTitle: "News",
        headerStyle: "empty"
      }
    })
  })

  tk_works.nodes.forEach(node => {
    createPage({
      path: node.uri,
      component: slash(postTemplate),
      context: {
        node: node,
        allWorks: tk_works,
        pageTitle: "Work",
        headerStyle: "empty"
      }
    })
  })

  tk_positions.nodes.forEach(node => {
    createPage({
      path: node.uri,
      component: slash(positionsSingle),
      context: {
        node: node,
        pageTitle: "Careers",
        headerStyle: "empty"
      }
    })
  })
}
