module.exports = {
  siteMetadata: {
    title: "accuranker",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "gNAz5s3S6bcgnPLbEQ9Mwtlg5z-kABTlmGQnUf-d0pk",
        spaceId: "tdpyozytknjz",
      },
    },
    "gatsby-plugin-postcss",
  ],
};
