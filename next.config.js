
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['mvT6D3YS8SfuJG2DQ3gEg6'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  