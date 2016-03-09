import Builder from 'systemjs-builder';
import systemResolver from './systemResolver';

export default function(moduleName, pathToSystemConfig) {
    let builder = new Builder();
    systemResolver(moduleName, pathToSystemConfig, builder);
}