System.config({
    'transpiler': 'babel',
    'defaultJSExtensions': true,
    'paths': {
        'stackTrace': 'node_modules/stacktrace-js/dist/stacktrace.js',
        'babel': '../../../node_modules/babel-core/browser.js',
        'babel-runtime/core-js/object/*': 'node_modules/babel-runtime/core-js/object/*.js',
        'hammer': '../../../node_modules/hammerjs/hammer.js'
    },
    'meta': {
        'hammer': {
            'format': 'global'
        }
    }
});
