'use strict';
const fetch = require('isomorphic-fetch');

module.exports = function HTTPClientFetchImplementation() {
  return Object.freeze({
    sendRequest
  });

  function sendRequest(url, {method, body, headers, redirect}={}) {
    return fetch(url, {method, body, headers, redirect}).then(response => {
      const responseHeaders = {};
      response.headers.forEach((value, name) => responseHeaders[name] = value);
      return response.text().then(responseText => {
        return {
          status: response.status,
          headers: responseHeaders,
          body: responseText
        };
      });
    });
  }
};
