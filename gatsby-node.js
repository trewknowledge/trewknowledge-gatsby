/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const slash = require('slash');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const pageTemplate = path.resolve('./src/templates/page.js');
  const postTemplate = path.resolve('./src/templates/post.js');
  const homeTemplate = path.resolve('./src/templates/Home.js');
  const contactTemplate = path.resolve('./src/templates/Contact.js');
  const aboutTemplate = path.resolve('./src/templates/About.js');
  const careersTemplate = path.resolve('./src/templates/Careers.js');
  const wpVipTemplate = path.resolve('./src/templates/WpVip.js');
  const sapTemplate = path.resolve('./src/templates/SAP.js');
  const archiveNews = path.resolve('./src/templates/ArchiveNews.js');
  const archiveWorks = path.resolve('./src/templates/ArchiveWorks.js');
  const archivePositions = path.resolve('./src/templates/ArchivePositions.js');
  const positionsSingle = path.resolve('./src/templates/PositionsSingle.js');
  const thankYou = path.resolve('./src/templates/ThankYou.js');

  const result = await graphql(`
    {
      allWpPage {
        nodes {
          title
          id
          uri
          content
          link
          template {
            ... on WpTemplate_Careers {
              templateName
            }
            ... on WpTemplate_About {
              templateName
            }
            ... on WpTemplate_Contact {
              templateName
            }
            ... on WpTemplate_WordPressVIP {
              templateName
            }
            ... on WpTemplate_SAP {
              templateName
            }
          }
        }
      }
      allWpPost(sort: {order: DESC, fields: date}) {
        nodes {
          id
          uri
          title
          content
          excerpt
          date
          featuredImage {
            node {
              sourceUrl
              localFile {
                childImageSharp {
                  fluid(maxWidth: 905, quality: 80) {
                    base64
                    aspectRatio
                    src
                    srcSet
                    sizes
                  }
                }
              }
            }
          }
        } 
      }
      allWpTkWork(sort: {order: DESC, fields: date}) {
        nodes {
          id
          uri
          title
          content
          date
          featuredImage {
            node {
              sourceUrl
              localFile {
                childImageSharp {
                  fluid(maxWidth: 905, quality: 80) {
                    base64
                    aspectRatio
                    src
                    srcSet
                    sizes
                  }
                }
              }
            }
          }
        }
      }
      allWpTkPosition {
        nodes {
          id
          uri
          title
          content
          excerpt
          date
        }
      }
    }
  `)

  if (result.errors) {
    throw new Error(result.errors)
  }

  const { 
    allWpPage,
    allWpPost,
    allWpTkWork,
    allWpTkPosition,
  }  = result.data;

  // WP default pages
  allWpPage.nodes.forEach(node => {
    if (node.uri === '/') {
      createPage({
        path: node.uri,
        component: slash(homeTemplate),
        context: {
          node: node,
          allPosts: allWpPost.nodes.slice(0, 2),
          allWorks: allWpTkWork.nodes.slice(0, 4),
        }
      })
    } else if (node.template.templateName === 'Careers') {
      createPage({
        path: node.uri,
        component: slash(careersTemplate),
        context: {
          node: node,
          headerStyle: 'blue'
        }
      })
    } else if (node.template.templateName === 'About') {
      createPage({
        path: node.uri,
        component: slash(aboutTemplate),
        context: {
          node: node,
          allPosts: allWpPost.nodes.slice(0, 2)
        }
      })
    } else if (node.template.templateName === 'Contact') {
      createPage({
        path: node.uri,
        component: slash(contactTemplate),
        context: {
          node: node,
          headerStyle: 'contact',
        }
      })
    } else if (node.template.templateName === 'SAP') {
      createPage({
        path: node.uri,
        component: slash(sapTemplate),
        context: {
          node: node,
          headerStyle: 'white',
        }
      })
    } else if (node.template.templateName === 'WordPress VIP') {
      createPage({
        path: node.uri,
        component: slash(wpVipTemplate),
        context: {
          node: node,
          headerStyle: 'black',
        }
      })
    } else if (node.title === 'Privacy Policy') {
      createPage({
        path: node.uri,
        component: slash(postTemplate),
        context: {
          node: node,
          pageTitle: "Privacy Policy",
          headerStyle: "empty"
        }
      })
    } else if (node.title === 'Thank You') {
      createPage({
        path: node.uri,
        component: slash(thankYou),
        context: {
          node: node,
          pageTitle: "Thank You",
          headerStyle: "white"
        }
      })
    } else {
      createPage({
        path: node.uri,
        component: slash(pageTemplate),
        context: node
      })
    }
  })

// ------------- Create non-paginated archive pages -------------
const archivesArray = [
  {
    postsArray: allWpPost.nodes,
    pageTemplate: archiveNews,
    path: '/news/',
    archiveTitle: 'News',
    
  },
  {
    postsArray: allWpTkWork.nodes,
    pageTemplate: archiveWorks,
    path: '/work',
    archiveTitle: 'Work',
    
  },
  {
    postsArray: allWpTkPosition.nodes,
    pageTemplate: archivePositions,
    path: '/positions',
    archiveTitle: 'Careers',
    newsPosts: allWpPost.nodes.slice(0, 2),
    headerStyle: "white",
    pageRef: "positionsArchive" 
  }
]

const createArchivePage = (archiveObject) => {
  createPage({
    component: slash(archiveObject.pageTemplate),
    path: archiveObject.path,
    context: {
      posts: archiveObject.postsArray,
      archivePath: archiveObject.path,
      archiveTitle: archiveObject.archiveTitle,
      newsPosts: archiveObject.newsPosts,
      headerStyle: archiveObject.headerStyle,
      pageRef: archiveObject.pageRef,
    }
  })
}

archivesArray.forEach(archivePage => (
  createArchivePage(archivePage)
))

// ------------- Create posts pages -------------
  allWpPost.nodes.forEach(node => {
    createPage({
      path: node.uri,
      component: slash(postTemplate),
      context: {
        node: node,
        allWorks: allWpTkWork.nodes,
        pageTitle: "News",
        headerStyle: "empty"
      }
    })
  })

  allWpTkWork.nodes.forEach(node => {
    createPage({
      path: node.uri,
      component: slash(postTemplate),
      context: {
        node: node,
        allWorks: allWpTkWork.nodes,
        pageTitle: "Work",
        headerStyle: "empty"
      }
    })
  })

  allWpTkPosition.nodes.forEach(node => {
    createPage({
      path: node.uri,
      component: slash(positionsSingle),
      context: {
        node: node,
        pageTitle: "Careers",
        headerStyle: "blue",
        pageRef: 'TK_Position'
      }
    })
  })
}
