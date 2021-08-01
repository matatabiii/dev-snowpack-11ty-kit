module.exports = function(eleventyConfig) {
  // Config API を使って新たなフィルター追加する
  // eleventyConfig.addFilter('myFilter', function() {});

  // assetsの対象ファイルをoutputディレクトリにコピー
  // eleventyConfig.addPassthroughCopy('./src/assets/images');

  // // watch対象の追加
  // eleventyConfig.addWatchTarget('./src/assets/sass/');
  // eleventyConfig.addWatchTarget('./src/assets/js/');

  // BrowserSyncのoptionを上書き
  // eleventyConfig.setBrowserSyncConfig({
  //   notify: false,
  //   open: 'local',
  //   files: ['./dist/assets/**/*']
  // });

  // オブジェクトで設定してた値は`return`に指定する（オプション）
  return {
    dir: {
      input: 'src',
      output: 'src/_site'
    },
    // templateFormats: ['md', 'njk'] // 対象のファイルを限定する
  };
};
