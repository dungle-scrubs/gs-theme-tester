require('dotenv').config()
const shopData = require('./shop-config')

module.exports = {
  siteMetadata: {
    title: shopData.storeName,
    description: shopData.storeDescription,
    location: shopData.location,
  },
  plugins: [
    {
      resolve: '@dungle-scrubs/gs-theme',
      options: {
        siteUrl: 'https://google.com/', // siteUrl must exist for gatsby-plugin-sitemap
        shopifySubdomain: process.env.GATSBY_SHOP_NAME,
        shopifyAccessToken: process.env.GATSBY_SHOPIFY_ACCESS_TOKEN,
        shopifyApiVersion: process.GATSBY_SHOPIFY_STOREFRONT_API_VERSION,
        basePath: '/',
        shopifyLite: false,
        enableWebp: true,
        imageQuality: '95',
        gsThemeConfig: {
          storeName: shopData.storeName,
          storeDescription: shopData.storeDescription,
          email: shopData.email,
          company: shopData.company,
          location: shopData.location,
          address: shopData.address,
          phone: shopData.phone,
          workingDays: shopData.workingDays,
          workingHours: shopData.workingHours,
          socialNetworks: shopData.socialNetworks,
          shareButtons: shopData.shareButtons,
          enableFloatingCart: shopData.enableFloatingCart,
          googleAnalyticsId: shopData.googleAnalyticsId,
          locales: shopData.locales,
          currency: shopData.currency,
          productsPerCollectionPage: shopData.productsPerCollectionPage,
          articlesPerBlogPage: shopData.articlesPerBlogPage,
          gatsbyImageProps: {
            loading: 'eager', // Using 'eager' currently improves Lighthouse 6 metrics. See: https://github.com/gatsbyjs/gatsby/issues/24332#issuecomment-650760081
            fadeIn: true,
            durationFadeIn: 500,
          },
        },
        manifest: {
          // web app manifest options to be passed to 'gatsby-plugin-manifest' installed inside theme
          name: 'Gatsby Shopify Store',
          short_name: 'Gatsby Shopify',
          start_url: '/',
          background_color: '#fff',
          theme_color: '#333',
          display: 'standalone',
          icon: 'src/images/shopping_bag.svg', // TODO: change to shop brand's logo
          icon_options: {
            purpose: 'any maskable',
          },
          cache_busting_mode: 'none',
        },
      },
    },
    'gatsby-plugin-netlify',
  ],
}
