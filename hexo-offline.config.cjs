// offline config passed to workbox-build.
module.exports = {
  globPatterns: ["**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff}"],
  globDirectory: "/path/to/hexo/public",
  swDest: "/path/to/hexo/service-worker.js",
};
