module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['components/*.vue', 'layouts/*.vue', 'pages/*.vue'],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
