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
  eleventyConfig.addFilter("ISOtz", function (date) {
    return DateTime.fromJSDate(new Date(date), {
      zone: "America/New_York",
    });
  });
  eleventyConfig.addFilter("debug", function (obj) {
    console.log(obj);
    // return JSON.stringify(obj, null, 4);
  });
  /* amazingly, a convo between the two
     creators whose work I'm mashing together in this project
     https://github.com/11ty/eleventy/issues/567 
  */
  eleventyConfig.addNunjucksFilter("getVarFromString", function (varName) {
    return this.getVariables()[varName];
  });

  eleventyConfig.addCollection("everything", function (collection) {
    const x = collection.getFilteredByTag("notes");
    const y = collection.getFilteredByTag("articles");
    const z = collection.getFilteredByTag("bookmarks");
    const a = collection.getFilteredByTag("events");
    const b = collection.getFilteredByTag("likes");
    const c = collection.getFilteredByTag("reposts");
    const d = collection.getFilteredByTag("replies");
    const e = collection.getFilteredByTag("checkins");
    const all = x
      .concat(y)
      .concat(z)
      .concat(a)
      .concat(b)
      .concat(c)
      .concat(d)
      .concat(e)
      .sort((a, b) => a.date - b.date);
    return all;
  });
  eleventyConfig.addPassthroughCopy("favicon.ico");
  return {
    passthroughFileCopy: true,
  };
};
