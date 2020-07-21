/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const slash = require('slash');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;

  const pageTemplate = path.resolve('./src/templates/page.js');
  const postTemplate = path.resolve('./src/templates/post.js');
  const homeTemplate = path.resolve('./src/templates/home.js');
  const contactTemplate = path.resolve('./src/templates/contactTemplate.js');
  const aboutTemplate = path.resolve('./src/templates/aboutTemplate.js');
  const careersTemplate = path.resolve('./src/templates/careersTemplate.js');
  const wpVipTemplate = path.resolve('./src/templates/wpVipTemplate.js');
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
              ... on WPGraphQL_AboutTemplate {
                templateName
              }
              ... on WPGraphQL_ContactTemplate {
                templateName
              }
              ... on WPGraphQL_WordPressVIPTemplate {
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
              mediaItemId
              modified
              imageFile {
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
              mediaItemId
              modified
              imageFile {
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
        tk_positions {
          nodes {
            id
            uri
            slug
            title
            content
            excerpt
            date
            __typename
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
    if (node.uri === '/') {
      createPage({
        path: node.uri,
        component: slash(homeTemplate),
        context: {
          node: node,
          allPosts: posts.nodes.slice(0, 2),
          allWorks: tk_works.nodes.slice(0, 4),
        }
      })
    } else if (node.template.templateName === 'Careers') {
      createPage({
        path: node.uri,
        component: slash(careersTemplate),
        context: {
          node: node,
          headerStyle: 'blue',
          headerContent: 'HeroCareers',
        }
      })
    } else if (node.template.templateName === 'About') {
      createPage({
        path: node.uri,
        component: slash(aboutTemplate),
        context: {
          node: node,
          headerContent: 'HeroAbout',
          allPosts: posts.nodes.slice(0, 2),
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
    postsArray: posts.nodes,
    
    pageTemplate: archiveNews,
    path: '/news',
    archiveTitle: 'News',
    
  },
  {
    postsArray: tk_works.nodes,
    
    pageTemplate: archiveWorks,
    path: '/work',
    archiveTitle: 'Work',
    
  },
  {
    postsArray: tk_positions.nodes,
    
    pageTemplate: archivePositions,
    path: '/positions',
    archiveTitle: 'Careers',
    newsPosts: posts.nodes.slice(0, 2),
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
  posts.nodes.forEach(node => {
    createPage({
      path: node.uri,
      component: slash(postTemplate),
      context: {
        node: node,
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
        allWorks: tk_works.nodes,
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
        headerStyle: "blue"
      }
    })
  })
}

const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

exports.createResolvers = ({
  actions,
  cache,
  createNodeId,
  createResolvers,
  getNode,
  store,
  reporter
}) => {
  const { createNode, touchNode } = actions;

  // Add all media libary images so they can be queried by
  // childImageSharp
  createResolvers({
    WPGraphQL_MediaItem: {
      imageFile: {
        type: `File`,
        async resolve(source, args, context, info) {
          if (source.sourceUrl) {
            let fileNodeID;
            let fileNode;
            let sourceModified;

            // Set the file cacheID, get it (if it has already been set)
            const mediaDataCacheKey = `wordpress-media-${source.mediaItemId}`;
            const cacheMediaData = await cache.get(mediaDataCacheKey);

            if (source.modified) {
              sourceModified = source.modified;
            }

            // If we have cached media data and it wasn't modified, reuse
            // previously created file node to not try to redownload
            if (cacheMediaData && sourceModified === cacheMediaData.modified) {
              fileNode = getNode(cacheMediaData.fileNodeID);

              // check if node still exists in cache
              // it could be removed if image was made private
              if (fileNode) {
                fileNodeID = cacheMediaData.fileNodeID;
                // https://www.gatsbyjs.org/docs/node-creation/#freshstale-nodes
                touchNode({
                  nodeId: fileNodeID
                });
              }
            }

            // If we don't have cached data, download the file
            if (!fileNodeID) {
              try {
                // Get the filenode
                fileNode = await createRemoteFileNode({
                  url: source.sourceUrl,
                  store,
                  cache,
                  createNode,
                  createNodeId,
                  reporter
                });

                if (fileNode) {
                  fileNodeID = fileNode.id;

                  await cache.set(mediaDataCacheKey, {
                    fileNodeID,
                    modified: sourceModified
                  });
                }
              } catch (e) {
                // Ignore
                console.log(e);
                return null;
              }
            }

            if (fileNode) {
              return fileNode;
            }
          }
          return null;
        }
      }
    }
  })
}
