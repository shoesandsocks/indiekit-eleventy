const sanitizeHTML = require("sanitize-html");

const getWebmentionsForUrl = (webmentions, url) => {
  const hasRequiredFields = (entry) => {
    const { author, published, content } = entry;
    return author.name && published && content;
  };
  const sanitize = (entry) => {
    const { content } = entry;
    if (content["content-type"] === "text/html") {
      content.value = sanitizeHTML(content.value);
    } else if (content.html) {
      content.html = sanitizeHTML(content.html);
    }
    return entry;
  };

  const wmTargetMatch = (entry) => entry["wm-target"] === url.trim();

  const xx = webmentions
    .filter(hasRequiredFields)
    .filter(wmTargetMatch)
    .map(sanitize);

  return xx;
};

module.exports = getWebmentionsForUrl;
