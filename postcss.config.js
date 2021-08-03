/*
メディアクエリーをまとめるのとソートに postcss-sort-media-queries を使用する予定
widthにprintなど他の指定があるとソートされないバグがあり、issueされているので修正待ち
それまで css-mqpacker が非推奨だが使用する
*/

// const purgecss = require('@fullhuman/postcss-purgecss')
const cssnano = require('cssnano')
const autoprefixer = require('autoprefixer')

const config = {
  plugins: [
    cssnano({ preset: 'default' }),
    autoprefixer,
    require('css-mqpacker')({
      sort: true
    })
    // require('postcss-sort-media-queries') // issueが修正され次第使用
  ]
}
module.exports = config
