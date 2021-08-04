require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.dialogicstudios.com.au",
    title: "Dialogic Studios",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: "dialogicstudios",
        accessToken: `${process.env.API_KEY}`,
        linkResolver: ({ node, key, value }) => project => `/${project.uid}`,
        schemas: {
          project: require("./custom_types/project.json"),
        },
      },
    },
    {
      resolve: "gatsby-plugin-page-transitions",
      options: {
        transitionTime: 350
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "./src/images/favicon.png"
      },
    }
  ],
};
