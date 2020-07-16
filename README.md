# Webpack bundler tutorial

## [Webpack](https://webpack.js.org/)
- Webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph which maps every module your project needs and generates one or more bundles.
- It is more than a bundler,
  - It transpiles ES6 to ES5
  - Minifies files
  - In-built live server => hot reloading

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
