const tailwindcss = require('tailwindcss');

module.exports = {
    plugins: [
        require('postcss-import'),
        tailwindcss('./tailwind.js'),
        require('postcss-preset-env')({ stage: 1 })
    ]
}

//PostCSS is necessary to lint our CSS.

//postcss-preset-env also includes:
//css variables
//nesting
//autoprefixer