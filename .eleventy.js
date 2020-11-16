const CleanCSS = require("clean-css");

module.exports = function (eleventyConfig) {
  // minify css (see Hot Tip on eleventy docs)
  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  eleventyConfig.addPassthroughCopy("favicon.ico");
  return {
    passthroughFileCopy: true,
  };
};
