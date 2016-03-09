import Builder from 'systemjs-builder';
import systemResolver from './systemResolver';

export default function(moduleName, pathToSystemConfig) {
    let builder = new Builder();
    return systemResolver.call(this, moduleName, pathToSystemConfig, builder);
}