require("dotenv").config({
  path: `.env`,
})

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = "https://www.example.com",
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env
const isNetlifyProduction = NETLIFY_ENV === "production"
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL

module.exports = {
  siteMetadata: {
    title: `Panagiotis Skarlas`,
    description: `Panagiotis Skarlas' personal portfolio.`,
    author: `@qktweets`,
    siteUrl: `https://skarlas.cc`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: [`${__dirname}/src/styles`],
        data: '@import "variables";',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `projects`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1000,
            },
          },
        ],
      },
    },
    `gatsby-remark-copy-linked-files`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Panagiotis Skarlas Portfolio`,
        short_name: `Panagiotis Skarlas`,
        start_url: `/`,
        background_color: `#efebd8`,
        theme_color: `#444`,
        display: `minimal-ui`,
        icon: `src/images/sk-initials.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-netlify-cms`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: "*" }],
          },
          "branch-deploy": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
          "deploy-preview": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-amplitude-analytics`,
      options: {
        // Specify the API key for your Amplitude Project (required)
        apiKey: process.env.AMPLITUDE_API_KEY,
        // Puts tracking script in the head instead of the body (optional)
        head: false,
        // Prevents loading Amplitude and logging events if visitors have "Do Not Track" enabled (optional)
        respectDNT: true,
        // Avoids sending pageview hits from custom paths (optional)
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Override the default event types (optional)
        eventTypes: {
          outboundLinkClick: "OUTBOUND_LINK_CLICK",
          pageView: "PAGE_VIEW",
        },
        // Amplitude JS SDK configuration options (optional)
        amplitudeConfig: {
          saveEvents: true,
          includeUtm: true,
          includeReferrer: true,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
