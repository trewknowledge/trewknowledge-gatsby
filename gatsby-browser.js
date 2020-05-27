/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

const $ = require("jquery")
require('foundation-sites');

export const onRouteUpdate = () => {
  $(document).ready(function () {
    
    $( document ).foundation();
  });
}

// ref https://stackoverflow.com/questions/54468240/how-to-include-jquery-in-a-gatsby-js-project
// https://github.com/gatsbyjs/gatsby/issues/7302
