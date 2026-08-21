module.exports = function (eleventyConfig) {
  // Copy these folders/files straight into the output, unprocessed.
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/admin");

  // Human-friendly date filter, e.g. "12 Aug 2026"
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return new Date(dateObj).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  });

  // Blog posts collection: everything in src/posts, newest first.
  eleventyConfig.addCollection("posts", (collectionApi) => {
    return collectionApi.getFilteredByGlob("src/posts/*.md").sort((a, b) => {
      return b.date - a.date;
    });
  });

  return {
    // Set automatically by the GitHub Actions workflow — "/" for a
    // username.github.io repo, "/repo-name/" for a project repo.
    // Every internal link/asset in the templates goes through the
    // `url` filter so it stays correct either way.
    pathPrefix: process.env.PATH_PREFIX || "/",
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    // Markdown files render through Nunjucks first, so front matter
    // and includes work the same way as .njk files.
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
