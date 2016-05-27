module.exports = function(config) {
  config.set({
 
    // base path that will be used to resolve all patterns (eg. files, exclude) 
    basePath: '',
 
 
    // frameworks to use 
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter 
    frameworks: ['browserify', 'jasmine'],
 
    // list of files / patterns to load in the browser 
    files: [
      'https://npmcdn.com/babel-polyfill@6.8.0/dist/polyfill',
      //'https://rawgit.com/angular/zone.js/master/dist/zone.js',
      'node_modules/zone.js/dist/zone.js',
      'spec/**/*.spec.js'
    ],
    preprocessors: {
      'spec/**/*.js': [ 'browserify' ]
    },    
    browsers: [
        'Chrome'
    ],
    reporters: ['kjhtml'],
    plugins: [
      'karma-jasmine',
      'karma-jasmine-html-reporter',
      'karma-chrome-launcher',
      'karma-browserify'
    ]
  });
};
