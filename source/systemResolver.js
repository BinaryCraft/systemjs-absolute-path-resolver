export default function(moduleName, systemConfigPath, builder) {
    return builder.loadConfig(systemConfigPath)
        .then(function() {
            return builder.loader.normalize(moduleName).then(function(systemPath) {
                let pathWithoutFileProtocol = systemPath.replace('file://', '');
                return pathWithoutFileProtocol;
            });
        });
}