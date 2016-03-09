import assert from 'assert';
import systemResolver from '../source/systemResolver';
import Builder from 'systemjs-builder';

describe(`Given the system resolver has been imported`, function() {
    describe(`when it's called with a valid config file path and the name of the dependency to resolve`, function() {
        it(`it should return the resolved dependency paths`, function(done) {
            var promise = systemResolver('stackTrace', 'test/data/system.config.js', new Builder());

            promise.then(function(resolvedPath) {
                assert(resolvedPath === process.cwd() + '/node_modules/stacktrace-js/dist/stacktrace.js');
                done();
            });
        });
    });
});