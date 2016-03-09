### About
> Resolves [SystemJS](https://github.com/systemjs/systemjs) modules to an absolute path on the users file system. 

### Install
 
`npm install system-resolver`

### Usage

```javascript
    var systemResolver = require('system-resolver');
    var pathToSystemConfig = 'system.config.js';
    var resolvedPath = systemResolver(moduleName, pathToSystemConfig)
```

##### ES2015

```javascript
    import systemResolver from 'system-resolver'
    let pathToSystemConfig = 'system.config.js';
    let resolvedPath = systemResolver(moduleName, pathToSystemConfig)
```

### Example 
Given my current working directory is '/Users/JohnDoe/magic_app' the following code

**system.config.js**
```javascript
System.config({
 'paths': {
        'stackTrace': 'node_modules/stacktrace-js/dist/stacktrace.js',
        'babel': '../../../node_modules/babel-core/browser.js',
        'babel-runtime/core-js/object/*': 'node_modules/babel-runtime/core-js/object/*.js',
        'hammer': '../../../node_modules/hammerjs/hammer.js'
    },
});
```

**app.js**
```javascript
    import systemResolver from 'system-resolver'
    let pathToSystemConfig = 'system.config.js';
    let resolvedPath = systemResolver(moduleName, pathToSystemConfig)
    console.log(resolvedPath) //resolvedPath =  
```

Will produce '/Users/JohnDoe/magic_app/node_modules/stacktrace-js/dist/stacktrace.js'


### Contributing 

1. Touch base by raise an issue first, don't want you to do unnecessary stuff 
2. Fork
3. Start coding: 
    - `npm install` : to install dependencies
    - `npm run qualityAssurance` : to run jscs, jshint, test, to generate a coverage report, and check coverage
    - `npm run compile`: to compile ES2015 code into ES5
    

