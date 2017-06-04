// https://github.com/postcss/postcss-loader#usage
// eslint-disable-next-line import/no-extraneous-dependencies
const autoprefixer = require('autoprefixer')();

module.exports = {
    plugins: [
        autoprefixer,
    ],
};
