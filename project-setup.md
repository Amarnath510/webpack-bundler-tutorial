# Project Setup

## Necessary Dependencies (After this section you will understand why Parcel is best for small projects)
- `npm i -D webpack webpack-cli`  // Install these if not yet
- `npm i -D webpack-dev-server`   // [webpack-dev-server](https://github.com/webpack/webpack-dev-server) for hot-reloading
- `npm i -D html-webpack-plugin`  // [HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/) plugin for opening/creating the start file
- `npm i -D clean-webpack-plugin` // [clean-webpack-plugin](https://www.npmjs.com/package/clean-webpack-plugin) to remove/clean your build folder
- `npm i -D css-loader style-loader` // [css-loader](https://webpack.js.org/loaders/css-loader/) & [style-loader](https://webpack.js.org/loaders/style-loader/#root); These are needed if we use only CSS and these are also pre-requisites if we want to use Sass(which we will use in this project), so install these
- `npm i -D sass-loader sass` // [sass-loader](https://webpack.js.org/loaders/sass-loader/#root) also refer [styling-loaders](https://webpack.js.org/loaders/#styling)
- `npm i -D bootstrap` // We can import this directly in to the main `scss` file and use all the classes of bootstrap
- `npm i -D html-loader file-loader` // [html-loader](https://webpack.js.org/loaders/html-loader/) to load images in img tag, [file-loader](https://webpack.js.org/loaders/file-loader/) to copy images from src to dist directory
