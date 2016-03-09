export default function(moduleName, systemConfigPath, builder) {
    builder.loadConfigSync(systemConfigPath);
    let systemPath = builder.loader.normalizeSync(moduleName);
    return systemPath.replace('file://', '');
}