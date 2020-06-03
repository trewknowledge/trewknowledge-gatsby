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
  const archiveWork = path.resolve('./src/templates/archive-work.js');

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

  // // WP archive for default posts
  // const defaultPosts = posts.nodes;
  // const postsPerPage = readingSettings.postsPerPage;
  // const numberOfPages = Math.ceil(defaultPosts.length / postsPerPage )

  // Array.from({ length: numberOfPages }).forEach((page, index) => {
  //   createPage({
  //     component: slash(archiveNews),
  //     path: index === 0 ? `/news` : `/news/${index + 1}`,
  //     context: {
  //       posts: defaultPosts.slice(index * postsPerPage, (index * postsPerPage) + postsPerPage),
  //       numberOfPages,
  //       currentPage: index + 1
  //     }
  //   })
  // })

  // const worksPosts = tk_works.nodes;

  // Array.from({ length: numberOfPages }).forEach((page, index) => {
  //   createPage({
  //     component: slash(archiveNews),
  //     path: index === 0 ? `/work` : `/work/${index + 1}`,
  //     context: {
  //       posts: worksPosts.slice(index * postsPerPage, (index * postsPerPage) + postsPerPage),
  //       numberOfPages,
  //       currentPage: index + 1
  //     }
  //   })
  // })

// ----------------------


// ------------- Posts Archive Constructor ------------- 
const createArchive = (archiveConfigObject) => {
  const defaultPosts = archiveConfigObject.postsArray;
  const postsPerPage = archiveConfigObject.postsPerPage;
  const numberOfPages = Math.ceil(defaultPosts.length / postsPerPage);
  const allPosts = archiveConfigObject.allPosts;

  Array.from({ length: numberOfPages }).forEach((page, index) => {
    createPage({
      component: slash(archiveConfigObject.pageTemplate),
      path: index === 0 ? `${archiveConfigObject.path}` : `${archiveConfigObject.path}/${index + 1}`,
      context: {
        posts: defaultPosts.slice(index * postsPerPage, (index * postsPerPage) + postsPerPage),
        numberOfPages,
        currentPage: index + 1,
        archivePath: archiveConfigObject.path,
        archiveTitle: archiveConfigObject.archiveTitle,
        allPosts: allPosts,
      }
    })
  })
}

// ------------- Archive Config Objects -------------

const postsArchiveConfig = {
  postsArray: posts.nodes,
  postsPerPage: readingSettings.postsPerPage, 
  pageTemplate: archiveNews,
  path: '/news',
  archiveTitle: 'News',
  allPosts: posts
}

const athletesArchiveConfig = {
  postsArray: tk_works.nodes,
  postsPerPage: 9, 
  pageTemplate: archiveNews,
  path: '/work',
  archiveTitle: 'Work',
  allPosts: tk_works
}

// ------------- WP archive for default posts -------------
createArchive(postsArchiveConfig);

// ------------- Athletes Archive -------------
createArchive(athletesArchiveConfig);












// ----------------------


  // WP default posts
  posts.nodes.forEach(node => {
    createPage({
      path: node.uri,
      component: slash(postTemplate),
      context: node
    })
  })

  tk_works.nodes.forEach(node => {
    createPage({
      path: node.uri,
      component: slash(postTemplate),
      context: node
    })
  })
}
