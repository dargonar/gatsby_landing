module.exports = {
  siteMetadata: {
    title: "Muebles Guapos",
    author: "Muebles Guapos",
    description: "Muebles Guapos - Sofás y muebles de alta calidad hechos a mano"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#000000',
        theme_color: '#000000',
        display: 'minimal-ui',
        // icon: 'src/images/favicon-96x96.png', // This path is relative to the root of the site.
        icon: 'src/images/muebles.guapos.logo.svg',
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
