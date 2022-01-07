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
  const { meta, lang, seo, author, location, pageContext } = props;
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

  const seoTitle = seo?.title;
  const seoDesc = seo?.opengraphDescription;
  const seoAuthor = author?.node?.seo?.title;

  const metaTitle = seoTitle || site.siteMetadata.title
  const metaDescription = seoDesc || site.siteMetadata.description
  const metaAuthor = seoAuthor || site.siteMetadata.title

  const canonicalUrl = `${site.siteMetadata.siteUrl}${location}`;

  const pageDate = () => {
    if ( formatDate(pageContext?.node?.date) === 'Invalid Date' ) {
      return ''
    } else {
      return formatDate(pageContext?.node?.date);
    }
  }

  console.log(site.siteMetadata.siteUrl);
  console.log(site.siteMetadata.image);
  console.log(`${site.siteMetadata.siteUrl}/${site.siteMetadata.image}`);

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
          'url': '${canonicalUrl}',
          'thumbnailUrl': 'https://blog.parse.ly/inline_mra670hTvL1qz4rgp.png',
          'datePublished': '${pageDate()}',
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
