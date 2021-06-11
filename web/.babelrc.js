const path = require('path')

module.exports = {
  extends: '../babel.config.js',
  plugins: [
    [
      'module-resolver',
      {
        // root: [__dirname],
        // cwd: 'packagejson',
        alias: {
          // Doesn't work without cwd
          // prerender trys to resolve
          // → Cannot find module '../../../../src/layouts/TasksLayout'
          '@layouts': './src/layouts',

          // However this works, without cwd
          // '@layouts': path.join(__dirname, 'src/layouts'),
        },
      },
    ],
  ],
}
