/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: 'rku3plfk5z4g',
        accessToken: '5gk4MLm65K77rs4VbgwVtB_rmOu4kVcn63wyNJQ1q_Q',
      },
    }
  ]
}
