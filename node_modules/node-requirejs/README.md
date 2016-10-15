# node-requirejs

Lets you use requirejs modules in Node

`node-requirejs` comes in hand when you have a requirejs based application and want to load your AMD
defined modules in a Node environment.
One possible use case for this is to unit test without any browser in the Node environment
(with [mocha](http://mochajs.org/), for example)

## Getting started

```
npm install node-requirejs
```

## Usage

You can instantiate and provide a configuration at the same time

```javascript
var requirejs = require('requirejs').requirejs(yourRequireJSConfig);
var someModule = requirejs('some-module');
```

Or you can add an extra config on top of your 'normal' one


```javascript
var requirejs = require('requirejs').requirejs(yourRequireJSConfig, someExtraConfig);
var someModule = requirejs('some-module');
```

**N.B.** The component has a default configuration (that you can of course override):

```javascript
{
   baseUrl: '',
   nodeRequire: 'require'
}
```

## Configuration

The module expose a `config` method that can be used to apply incremental configurations that will be
painlessly merged into the existing configuration

E.g.

```javascript
var requirejs = require('requirejs').requirejs(yourRequireJSConfig);
requirejs.config({ "baseUrl": "modules/level1" });
requirejs.config({ "paths": { "some-module": "level2/some-module" } });
var someModule = requirejs('some-module');
```

## Test

```
npm test
```

## License
MIT