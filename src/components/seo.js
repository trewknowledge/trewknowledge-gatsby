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

function SEO({ meta, lang, seo, author }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const seoTitle = seo?.title;
  const seoDesc = seo?.opengraphDescription;
  const seoAuthor = author?.node?.seo?.title;

  const metaTitle = seoTitle || site.siteMetadata.title
  const metaDescription = seoDesc || site.siteMetadata.description
  const metaAuthor = seoAuthor || site.siteMetadata.title

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
      <script type="application/ld+json">
        {`{
          '@context': 'http://schema.org',
          '@type': 'NewsArticle',
          'headline': '${metaTitle}',
          'url': 'https://blog.parse.ly/post/57821746552',
          'thumbnailUrl': 'https://blog.parse.ly/inline_mra670hTvL1qz4rgp.png',
          'datePublished': '2013-08-15T13:00:00Z',
          'articleSection': 'Programming',
          'creator': ['Alan Alexander Milne'],
          'keywords': ['statistics','zipf','internet','behavior']
        }`}
      </script>
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
