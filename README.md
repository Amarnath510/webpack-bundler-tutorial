# Webpack bundler tutorial

## [Webpack](https://webpack.js.org/)
- Webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph which maps every module your project needs and generates one or more bundles.
- It is more than a bundler,
  - It transpiles ES6 to ES5
  - Minifies files
  - In-built live server => hot reloading
- Webpack is `highly configurable` that is the reason it is used in huge projects
- NOTE: Any bundler generates a `dist`(or you can name it wantever you want) folder which should contain everything related to the project such that we can distribute it to others to run. Make sure nothing in the dist is dependent outside of the distribution directory.

<img width="1035" alt="webpack-bundler" src="https://user-images.githubusercontent.com/4599623/87679657-12a64900-c79a-11ea-80cd-b63d192f6885.png">

## [Webpack Concepts](https://webpack.js.org/concepts/)

### Entry
- An entry point indicates which module webpack should use to begin building out its internal dependency graph. Webpack will figure out the rest
- By default its value is `./src/index.js`, but you can specify a different (or multiple entry points) by setting an `entry` property in the `webpack configuration`

### Output
- The output property tells webpack where to emit the bundles it creates and how to name these files.
- It defaults to `./dist/main.js` for the main output file and to the `./dist` folder for any other generated file.

### Loaders
- Out of the box, webpack only understands JavaScript and JSON files. Loaders allow webpack to process other types of files and convert them into valid modules

### Plugins
- While loaders are used to transform certain types of modules, plugins can be leveraged to perform a wider range of tasks like bundle optimization, asset management and injection of environment variables.

### Config and Project Setup
- Unlike [Parcel bundler](https://github.com/Amarnath510/parcel-bundler-tutorial) which has zero configurations, for webpack we need to do `several installations` and configure as required
- We'll create `webpack.config.js` under project root and this serves as the heart of the bundler
- Refer setup, dependencies installation, how to run etc in [project-setup.md](https://github.com/Amarnath510/webpack-bundler-tutorial/blob/master/project-setup.md)

### Running in Production(Heroku)
- [Just like how we have used 'express' for Parcel app we will use the same process here.](https://github.com/Amarnath510/parcel-bundler-tutorial#deploy-parcel-build-in-heroku-same-process-for-webpack-too-actually-this-example-is-from-webpack-source-)
- Hit, https://webpack-simple-tutorial.herokuapp.com/

## References
- [Simple webpack tutorial](https://www.youtube.com/watch?v=3LZOL65sxhU)
- [Loaders, CSS, Sass, Bootstrap](https://www.youtube.com/watch?v=rrMGUnBmjwQ&list=PLblA84xge2_zwxh3XJqy6UVxS60YdusY8&index=5)
- [Html-loader, File-loader, & Clean-webpack](https://www.youtube.com/watch?v=mnS_1lolc44&list=RDCMUCrqAGUPPMOdo0jfQ6grikZw)
- [Codedamn webpack tutorial](https://www.youtube.com/watch?v=AHsP4JjvITg&list=PLYxzS__5yYQl9-x04VPyDecyPdNPAPmFQ&index=1)

