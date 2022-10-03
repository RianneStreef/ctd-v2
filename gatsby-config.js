require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

// const intakeInfo = require("./src/content/intake");

// let { siteName, companyName, highlightColor } = intakeInfo;

// console.log("intake info in config");
// console.log(intakeInfo);
// console.log(siteName);

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.claireturner-design.com",
    title: "claire-turner-design",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-LBHJ61Q3QL",
          "G-V053R37QZD ",
          // Google Analytics / GA
        ],
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
        // defaults to false
        enableWebVitalsTracking: true,
        // Setting this parameter is also optional
        respectDNT: true,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-anchor-links`,
    `gatsby-plugin-fontawesome-css`,

    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Claire Turner Design",
        short_name: "Claire Turner Design",
        start_url: "/",
        background_color: "#e30613",
        theme_color: "#ff00ff",
        display: "fullscreen",
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-plugin-layout",
      options: {
        component: require.resolve("./src/components/Layout.jsx"),
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Montserrat`, `source sans pro\:100,300,400`],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://yahoo.us5.list-manage.com/subscribe/post?u=df564ab66c93f2beea766baa2&amp;id=29af27e7d8",
        timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.GATSBY_CONTENTFUL_TOKEN,
        spaceId: process.env.GATSBY_CONTENTFUL_ID,
      },
    },
  ],
};
