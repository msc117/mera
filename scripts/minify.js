const minify = require('html-minifier');
const fs = require('fs');

const html = fs.readFileSync('build/vulcanized.html').toString();

let minifiedHtml = minify.minify(html, {
    customAttrAssign: [/\$=/],
    removeComments: true,
    removeCommentsFromCDATA: true,
    removeCDATASectionsFromCDATA: true,
    collapseWhitespace: true,
    collapseInlineTagWhitespace: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    minifyJS: true,
    minifyCSS: true,
});

// we need to make a copy in src/client in order to work with webpack-dev-server
// TODO (msantos): maybe find a workaround if possible.
// webpack-dev-server doesn't rebuild src/client/index.html into build/client/
// and just uses its own copy in order to inject rebuilt files
// because of this keeping it only in build/client will result in a 404 for build/client/vulcanized.html
fs.writeFileSync('src/client/vulcanized.html', minifiedHtml);
// write to file
fs.writeFileSync('build/vulcanized.html', minifiedHtml);
