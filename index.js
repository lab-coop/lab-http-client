'use strict';
module.exports = (di) => {
  di.registerModule(
    require('./implementations/lab-http-client-fetch'), 'lab-http-client-fetch');
  di.registerModule(
    require('./implementations/lab-http-client-memory'), 'lab-http-client-memory');
  di.registerModule(
    require('./implementations/lab-http-client'), 'lab-http-client');
};
