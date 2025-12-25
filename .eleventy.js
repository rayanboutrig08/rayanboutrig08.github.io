module.exports = function(eleventyConfig) {
  // Tells Eleventy to copy your images and admin folder to the final site
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("admin");

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};
