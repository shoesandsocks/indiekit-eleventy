require("dotenv").config();
const Cache = require("@11ty/eleventy-cache-assets");

const API_ORIGIN = "https://webmention.io/api/mentions.jf2";
const token = process.env.WEBMENTION_IO_TOKEN;
const url = `${API_ORIGIN}?token=${token}`;

module.exports = async function () {
  try {
    const response = await Cache(url, {
      duration: "2m",
      type: "json",
    });
    if (response && response.name === "Webmentions") {
      return response.children;
    }
    return null;
  } catch (err) {
    console.error(err);
    return null;
  }
};
