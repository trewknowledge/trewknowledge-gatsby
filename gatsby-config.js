module.exports = {
  siteMetadata: {
    title: `Trew Knowledge`,
    description: `Trew Knowledge company website build with Gatsby & Wordpress`,
    url: 'gatsby.trewknowledge.com',
    image: `src/images/tk-site-icon.png`,
    author: `Trew Knowledge`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
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
        icon: `src/images/tk-site-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-wpgraphql-inline-images',
      options: {
        wordPressUrl: 'https://trewknowledge-com-develop.go-vip.net/',
        uploadsUrl: 'https://trewknowledge-com-develop.go-vip.net/wp-content/uploads/',
        processPostTypes: ['Post', 'Tk_work'],
        graphqlTypeName: 'WPGraphQL',
        // httpHeaders: {
        //   Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        // }
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
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
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
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "WPGraphQL",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "wpgraphql",
        // Url to query from
        url: "https://trewknowledge-com-develop.go-vip.net/graphql",
      },
    },  
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
