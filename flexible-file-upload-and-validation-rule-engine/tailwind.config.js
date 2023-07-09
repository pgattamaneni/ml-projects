module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.js',
    './src/*.js',
    './src/**/**/*.js'
  ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
