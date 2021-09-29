module.exports = {
  siteMetadata: {
    title: `Trew Knowledge`,
    description: `We are a digital marketing agency creating award-winning experiences for our modern world.`,
    url: 'www.trewknowledge.com',
    image: `src/assets/img/tk-site-icon.png`,
    author: `Trew Knowledge`,
    siteUrl: `https://trewknowledge.com/`
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url:
          process.env.WPGRAPHQL_URL ||
          // `https://trewknowledge-com-develop.go-vip.net/graphql`,
          'https://admin.trewknowledge.com/graphql',
        verbose: true,
        develop: {
          hardCacheMediaFiles: true,
        },
        html: {
          useGatsbyImage: true,
          imageMaxWidth: 905,
          imageQuality: 80,
          fallbackImageMaxWidth: 800,
        },
        debug: {
          graphql: {
            writeQueriesToDisk: true,
          },
        },
        /*
        type: {
          Post: {
            limit:
              process.env.NODE_ENV === `development`
                ? // Lets just pull 50 posts in development to make it easy on ourselves.
                  50
                : // and we don't actually need more than 5000 in production for this particular site
                  5000,
          },
        },
        */
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/img/tk-site-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-NM55TDC",
        includeInDevelopment: false,
        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        // routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svgs/ // See below to configure properly
        }
      }
    },
    {
      resolve: `gatsby-plugin-parsely-analytics`,
      options: {
        apikey: "sandbox.trewknowledge.com",
        enableInDevelopment: false // send page views when NODE_ENV !== prod
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
