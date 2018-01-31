/* config-overrides.js */

if (process.env.NODE_ENV === 'development') {
  const devServerConfigPath = 'react-scripts/config/webpackDevServer.config';
  const devServerConfig = require(devServerConfigPath);
  const fs = require('fs');
  require.cache[require.resolve(devServerConfigPath)].exports = (
    proxy,
    allowedHost
  ) => {
    const conf = devServerConfig(proxy, allowedHost);
    conf.https = {
      key: fs.readFileSync('key.pem'),
      cert: fs.readFileSync('cert.pem')
    };

    return conf;
  };
}

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  return config;
}