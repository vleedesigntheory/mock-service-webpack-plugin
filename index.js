const path = require("path");
const fs = require("fs");
const { fork } = require('child_process');
class MockServiceWebpackPlugin {
  constructor(options) {
    this.options = options;
  }
  apply(compiler) {
    const { source, port = "9009" } = this.options;
    if (!source) {
      console.error(
        `Mock Directory did not exist. Please make sure your Mock Source Directory`
      );

      if (!fs.existsSync(source))
        console.error(
          `${source} did not exist. Please make sure your Source is Correct`
        );
    }

    let child;

    child = fork(path.resolve(__dirname, './lib/app.js'), [], {
        encoding: 'utf8',
        execArgv: process.execArgv
    })

    child.send({ source, port})

    compiler.hooks.watchRun.tapAsync('MockServiceWebpackPlugin', (compilation, callback) => {
        console.log('compiler watching...')
        
        fs.watch(source, { recursive: true }, (eventType, filename) => {
            console.log('eventType:', eventType, 'filename:', filename);
            child.kill('SIGKILL')
            child = fork(path.resolve(__dirname, './lib/app.js'), [], {
                encoding: 'utf8',
                execArgv: process.execArgv
            })
            child.send({ source, port})
        })
        callback()
    })
  }
}

module.exports = MockServiceWebpackPlugin;
