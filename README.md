<p align="center"><a href="https://github.com/vleedesigntheory/mock-service-webpack-plugin" target="_blank" rel="noopener noreferrer"><img width="200" src="/assets/logo.png" alt="logo"></a></p>

# mock-service-webpack-plugin

A Mock Service Based on Webpack 4/5

## Architecture

![mechanism](/assets/mechanism.png)

Use Inter-Process Communication in `Node.js` to handle HTTP Request between Webpack Dev Server and Mock Server:

![ipc](/assets/ipc.png)

## Installation

```sh
$ npm i mock-service-webpack-plugin
```
## Instruction

Require `mock-service-webpack-plugin`

```js
const MockServiceWebpackPlugin = require('mock-service-webpack-plugin')
```

Call the apply method with the webpack mock

```js
myPluginInstance.apply()
```

## Example

### Webpack

Modify your `webpack.config.js`

```js
const MockServiceWebpackPlugin = require('mock-service-webpack-plugin');

const path = require('path');
const fs = require('fs');

module.exports = {
    plugins: [
        new MockServiceWebpackPlugin({
            source: path.resolve(process.cwd(), './src/mock'), // your mock file directory path
            port: 9009 // you wanna a mock service port
        })
    ]
}
```

### Vue Cli

Modify your `vue.config.js`

if your `@vue/cli-service: ~5.0.0`

```js
const { defineConfig } = require('@vue/cli-service');
const MockServiceWebpackPlugin = require('mock-service-webpack-plugin');

const path = require('path');
const fs = require('fs');

module.exports = defineConfig({
    configureWebpack: {
        plugins: [
            new MockServiceWebpackPlugin({
                source: path.resolve(process.cwd(), './src/mock'), // your mock file directory path
                port: 9009 // you wanna a mock service port
            })
        ]
    }
})
```

or in `4.x`

```js
const MockServiceWebpackPlugin = require('mock-service-webpack-plugin');

const path = require('path');
const fs = require('fs');

module.exports = {
    configureWebpack: {
        plugins: [
            new MockServiceWebpackPlugin({
                source: path.resolve(process.cwd(), './src/mock'), // your mock file directory path
                port: 9009 // you wanna a mock service port
            })
        ]
    }
}
```

## Video

<video src="/assets/configuration.mp4" width="1920" height="1080">

<video src="/assets/service.mp4" width="1920" height="1080">

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2023-present Victor Lee