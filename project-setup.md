# Project Setup

## Create project
- `mkdir webpack-bundler-tutorial && cd webpack-bundler-tutorial`
- `npm init` and use default values

## Final Project Structure
- Don't create any of the below files except doing above steps (which will create package.json file by default)
- **Note**: Not sure but **index.html & index.js**(root files - you can give any name to these) should be straight under the `src` folder as mentioned below,
  ```
  [app] -- package.json
           webpack.config.js
           [src] -- index.html
                    index.js
                    [javascript] -- calculate.js
                          [sass] -- main.sass
                                    [mixins] -- colors.scss
                        [assets] -- [images] -- images
                                    [data] -- any json files that are needed

## Create config file (This is the heart of the bundler, it has every single detail)
- Create `webpack.config.js` under project root

## webpack changes explained step-by-step
- **NOTE: Webpack documentation is amazing. Almost all details which are mentioned in config file are present in each dependency documenation.**
- Install all dependencies as `dev`

## Install 'webpack' and 'webpack-cli'
- `npm i -D webpack webpack-cli`
- We have to provide an [enty Javascript file]((https://webpack.js.org/concepts/#entry)) for the bundler. Webpack will start from here and bundle all the imports that are mentioned in the JS file.
- Should also have an [output](https://webpack.js.org/concepts/#output) file. Where the entire JS code will be bundled to.
- Create `src` folder under root and create `index.js` file. Add some code like `console.log(123456)`
- Add `entry` and `output` to `webpack.config.js`
  ```
  const path = require('path')
  module.exports = {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'), // distribution folder will be created and entire project contents will be bundled to this directory
      filename: 'bundle.js' // any name can be given. bundle.js name is by convention
    }
  }
  ```
- Set `build` to use `webpack` in `package.json`
  ```
  "scripts": {
    "build": "webpack"
  },
  ```
- **Testing**
    - `npm run build` - this should create a distribution(`dist`) directory and bundle JS code there
    - You can check console statement in `dist/bundle.js`
    - **Bonus:** Create a directory `src/javascript` and add [calculate.js](https://github.com/Amarnath510/webpack-bundler-tutorial/blob/master/src/javascript/calculate.js) file in it. Import it in your main JS file, `index.js` as below
      ```
      ...
      import { multiplyTwoNumbers } from './javascript/calculate';
      console.log('multiplyTwoNumbers(10, 20) = ', multiplyTwoNumbers(10, 20));
      ...
      ```
    - Run the build again and see `bundle.js` file for the imported method

## Install [HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/)
- `npm i -D html-webpack-plugin`
- This is a `plugin` which will create a HTML file by default in `dist` when build is triggered. Later we will give our `index.html` file as input to this plugin
- We need to pull plugins using `require` before using them and also put them under a separate section called `plugins` in config file
  ```
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  .... 
  plugins: [
    new HtmlWebpackPlugin()
  ]
  ```
- **Testing**
    - `npm run build` -- this will generate index.html file (default one) and will insert `bundle.js` as a script tag in to this html file
    - You can run manually by doing, root$ `open ./dist/index.html` and see the console log which should print `123456`
    - But we don't want this default HTML file instead we want to create our own file and pass it as input to the plugin
    - Create `src/index.html` and just have something like `<header><h1>Webpack test</h1></header>`
    - Give this file as input to the HTML plugin,
      ```
      const HtmlWebpackPlugin = require('html-webpack-plugin');
      .... 
      plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
      ]
      ```
    - Run build again. Now you can see in `dist/index.html` the content which you added to the HTML and `bundle.js` is included in the HTML
    
## Install [webpack-dev-server](https://github.com/webpack/webpack-dev-server) for hot-reloading
- It's time to run the application and add hot reloading
- `npm i -D webpack-dev-server`
- Add dev-server to package scripts,
  ```
  "scripts": {
    "dev": "webpack-dev-server",
    "build": "webpack"
  },
  ```
- **Testing**
    - `npm run dev` -- this will run the application using webpack server at http://localhost:8080/
    - Make any changes in HTML to test the hot reload
    - **Optional**: Suppose you want the browser to open whenever the server is up(it is annoying sometimes) then add then mention below property in webpck config,
     ```
     ...
     devServer: {
        open: true
     },
     ...
     ```
     
## Install [Sass](https://webpack.js.org/loaders/sass-loader/#root) and other dependencies for styling
- `npm i -D css-loader style-loader sass-loader sass`
- Go through [sass-loader](https://webpack.js.org/loaders/sass-loader/#root), [css-loader](https://webpack.js.org/loaders/css-loader/), [style-loader](https://webpack.js.org/loaders/style-loader/#root) documentations. Pretty straight forward
- **config changes**
  ```
  module: {
    rules: [
      {
        test: /\.scss$/i,  // any file with scss extension should use the below loaders
        use: [ // order matters
          'style-loader', // Step-3: Injects styles into DOM
          'css-loader',  // Step-2: Turns css to commonjs
          'sass-loader' // Step-1: Converts sass into css
        ]
      }
    ]
  }
  ```
- Create main.scss file - `src/sass/main.scss` with below simple styling
  ```
  $bg-color: yellow;
  body {
    background-color: $bg-color;
  }
  ```
- This `main.scss` will be the root for all stylings. This file will also have all the mixins included too. We have to let the application entry file know that it has to load all the stylings for the application
- Hence include this in the root JS file i,e, in `index.js`
  ```
  import './sass/main.scss'
  
  ...
  
  console.log(123456)
  ```
- **Testing**
    - `npm run dev` -- open http://localhost:8080/ and see how the styling has changed
    - **Bonus**: Include external stylinging like `bootstrap` (`npm i -D bootstrap`)
    - In `main.scss` import the bootstrap file
      ```
      @import '~bootstrap/scss/bootstrap'; // ~(tilde) = ./node_modules/
      // We are just including the root bootstrap file which has imported all bootstrap partials in our main styling file .. open the file to see the code
      // Try using some bootstrap class like 'container' (add it to body element) to test the changes
      ```
      
## Install [html-loader](https://webpack.js.org/loaders/html-loader/), [file-loader](https://webpack.js.org/loaders/file-loader/)
- Until now we have bundled Javascript & Sass files but what about images(svg, png, jpeg, jpg .. ) or any other files? How do we bundled these files?
- `npm i -D html-loader file-loader` // read documentation for details and usage
- [html-loader](https://webpack.js.org/loaders/html-loader/) is used to load images from `dist` which are included in the HTML using `img` tag
- But first of all we have to load assets(images) to `dist`. How do we do that? Using [file-loader](https://webpack.js.org/loaders/file-loader/)
- Let's configure these changes in our config file,
  ```
  -- we already defined rules for scss files, append the below rules to the rules array
  ...
  {
    test: /\.html$/i,    // if file ends with .html then use html-loader
    use: ['html-loader']
  },
  {
    test: /\.(svg|png|jpg|gif)$/i,  // if file ends with .svg|png|.. then use file-loader
    use: [
      {
        loader: 'file-loader',
      }
    ]
  }
  ...
  ```
- Create `src/assets` & `src/assets/images`. Add any svg/png file under it. Refer [project structure](https://github.com/Amarnath510/webpack-bundler-tutorial/blob/master/project-setup.md#final-project-structure)
- In `index.html` add a image tag, (**NOTE** the path of the image in below two cases)
  ```
  <img src="assets/images/music-player.svg"/>
  ```
  OR in `main.scss` file add,
  ```
  background-image: url('../assets/images/before_dawn.svg');
  ```
- **Testing**
  - `npm run dev` to see the image on the display
  
## Install [clean-webpack-plugin](https://www.npmjs.com/package/clean-webpack-plugin)
- Every time when build is generated it has to be clean and should not contain any unwanted or unused files from previous build. This plugin helps us to do that
- `npm i -D clean-webpack-plugin`
- Update the config file and add the clean-plugin to `plugins` array
  ```
  const { CleanWebpackPlugin } = require('clean-webpack-plugin');
  ...
  plugins: [
    new CleanWebpackPlugin(), // see documentation for more details
    new HtmlWebpackPlugin({ template: 'src/index.html' })
  ...
  ```
  
## References
- [Simple webpack tutorial](https://www.youtube.com/watch?v=3LZOL65sxhU)
- [Loaders, CSS, Sass, Bootstrap](https://www.youtube.com/watch?v=rrMGUnBmjwQ&list=PLblA84xge2_zwxh3XJqy6UVxS60YdusY8&index=5)
- [Html-loader, File-loader, & Clean-webpack](https://www.youtube.com/watch?v=mnS_1lolc44&list=RDCMUCrqAGUPPMOdo0jfQ6grikZw)
- [Codedamn webpack tutorial](https://www.youtube.com/watch?v=AHsP4JjvITg&list=PLYxzS__5yYQl9-x04VPyDecyPdNPAPmFQ&index=1)

## For deployment in Heroku
- Refer https://github.com/Amarnath510/webpack-bundler-tutorial#running-in-productionheroku
