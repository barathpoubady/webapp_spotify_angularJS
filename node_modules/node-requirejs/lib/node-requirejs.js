
var rjs = require('requirejs');

var isArray = function(elm) {
  return elm.constructor === Array;
};

exports.requirejs = function(requireConfig, optConfig) {

  this.config({
    baseUrl: '',
    nodeRequire: 'require'
  });

  if (requireConfig) {
    this.config(requireConfig);
  }

  if (optConfig) {
    this.config(optConfig);
  }

  return rjs;

};

exports.config = function(config) {
  var typeMsg;

  if (!rjs) {
    throw new Error('cannot apply configuration before requirejs has been instantiated')
  } else if (config) {
    if (typeof config === 'object' && !isArray(config)) {
      rjs.config(config);
    } else {
      typeMsg = isArray(config)? 'Array': typeof config;
      typeMsg += ' given instead';
      throw new Error('requirejs configuration must be an Object, ' + typeMsg);
    }
  }


};