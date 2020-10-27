// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  siteDescription:
    'Example E-Commerce Static Site with limited features built with Gridsome and Storyblok',
  siteUrl: 'https://gridsome-headphones.netlify.app/',
  icon: {
    favicon: {
      src: './src/favicon.png',
      sizes: [16, 32, 96],
    },
  },
  plugins: [
    {
      use: 'gridsome-source-storyblok',
      options: {
        client: {
          accessToken: 'JqdarF4197QZ3LCfIOM5eAtt', // process.env.STORYBLOK_API,
        },
        version: 'published', // Change this to draft if you want to use preview token.
      },
    },
    {
      use: 'gridsome-plugin-tailwindcss',
    },
  ],
}
