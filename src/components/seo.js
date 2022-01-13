/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { formatDate } from '../utils/utils'
function SEO(props) {
  const { meta, lang, seo, location, pageContext } = props;
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            image
          }
        }
      }
    `
  )

  const seoDesc = seo?.opengraphDescription;

  const metaTitle = pageContext?.node?.title|| site?.siteMetadata?.title
  const metaDescription = seoDesc || site?.siteMetadata?.description
  const metaAuthor = pageContext?.node?.author?.node?.name || site?.siteMetadata?.author

  // Parsly data
  const canonicalUrl = `${site?.siteMetadata?.siteUrl}${location}`;
  const formattedDate = formatDate(pageContext?.node?.date);
  const defaultImageUrl = `${site?.siteMetadata?.siteUrl}${site?.siteMetadata.image}`;
  const featuredImage = pageContext?.node?.featuredImage?.node?.localFile?.publicURL;
  const featuredImageUrl = `${site?.siteMetadata?.siteUrl}${pageContext?.node?.featuredImage?.node?.localFile?.publicURL}`;
  const thumbnailUrl = featuredImage ? featuredImageUrl : defaultImageUrl;
  const keywordList = pageContext?.node?.categories?.nodes?.map(node => (node.name));
  const keywords = keywordList?.map(keyword => `"${keyword}"`).join(', ');
  const postId = pageContext?.node?.databaseId;

  const testPostId = 123;
  
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      // titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: 'https://trewknowledge.com/tk-site-icon.png',
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: metaAuthor,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: 'https://trewknowledge.com/tk-site-icon.png',
        },
        {
          name: `twitter:image:alt`,
          content: 'Trew Knowledge Logo',
        },
      ].concat(meta)}
    >
      { pageContext?.isNewsArticle ? (
        <script type="application/ld+json">
          {`{
            "@context": "http://schema.org",
            "@type": "NewsArticle",
            "headline": "${metaTitle}",
            "url": "${canonicalUrl}",
            "thumbnailUrl": "${thumbnailUrl}",
            "datePublished": "${formattedDate}",
            "articleSection": "${pageContext.pageTitle}",
            "creator": ["${metaAuthor}"],
            "keywords": [${keywords}], 
            "post_id": "${postId}"
          }`}
        </script>
      ) : (
        <script type="application/ld+json">
          { `{
            "@context": "http://schema.org",
            "@type": "WebPage",
            "headline": "${metaTitle}",
            "url": "${canonicalUrl}"
          }` }
        </script>
      ) }
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
