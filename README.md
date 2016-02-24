Bootstrap Starter Project
=========================

A boilerplate starter Bootstrap project, utilising Gulp for automated build and NPM for package management.

## Quick Start ##

 - Assets (JS, SASS) should be stored in the `src/` directory.
 
 - Assets are combined and minified and stored for use in `web/dist/` - files here should not be modified as they will be overwritten.

 - NPM packages should be installed before developing within the project, run `npm install` to do this. 
 
 - Gulp and live-server should be installed globally by running `npm install -g gulp live-server`

 - To build the assets run `gulp` in the root directory of the project. To watch files and build when files change run `gulp watch`
 
 - To start the live reload server, simply run `npm start`
 
 - `web/` is the document root for the project, web servers should point to this directory.

 - HTML files should be contained under `web/` -> `web/index.html` is the default homepage.

 - Images should be stored under `web/images/`

## License ##

Code is released under MIT license. Compiled JS and CSS files contain Bootstrap and jQuery, the licenses for each are 
available through the links below:

 - [jQuery](https://github.com/jquery/jquery/blob/master/LICENSE.txt)
 
 - [Bootstrap](https://github.com/twbs/bootstrap/blob/master/LICENSE)
 