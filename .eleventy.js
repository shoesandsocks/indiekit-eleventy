const CleanCSS = require("clean-css");
const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  // minify css (see Hot Tip on eleventy docs)
  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  eleventyConfig.addFilter("simpleDate", function (date) {
    return DateTime.fromJSDate(new Date(date), {
      zone: "America/New_York",
    })
      .toLocaleString(DateTime.DATETIME_MED)
      .replace(/, \d{4}/, "");
  });
  eleventyConfig.addFilter("debug", function (obj) {
    console.log(obj);
    // return JSON.stringify(obj, null, 4);
  });
  eleventyConfig.addPassthroughCopy("favicon.ico");
  return {
    passthroughFileCopy: true,
  };
};
