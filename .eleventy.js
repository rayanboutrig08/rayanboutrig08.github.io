module.exports = function(eleventyConfig) {
  // This allows the admin folder to work
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("images");

  // This is the "Date Filter" that was causing the error
  eleventyConfig.addFilter("date", (dateObj) => {
    return new Date(dateObj).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};
