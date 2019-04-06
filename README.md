# use-force-update-hook

[![NPM version][npm-version-image]][npm-url] [![NPM downloads][npm-downloads-image]][npm-url] [![Dependencies][deps-image]][deps-url] [![Dev. Dependencies][dev-deps-image]][dev-deps-url] [![MIT License][license-image]][license-url] [![Build Status][travis-image]][travis-url] [![Coverage][codecov-image]][codecov-url]

React hook which gives [forceUpdate](https://reactjs.org/docs/react-component.html#forceupdate) to functional components.

## Install

```
npm i --save-dev use-force-update-hook
```

## Usage

This package exports 2 hooks: `useForceUpdate` and `useForceUpdateWithCallback`.

Normally you shoud use `useForceUpdate` hook:

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import { useForceUpdate } from 'use-force-update-hook'

function MyAwesomeComponent() {
  const forceUpdate = useForceUpdate()

  console.log('render')

  return (
    <div>
      <button onClick={forceUpdate}>Click to rerender MyAwesomeComponent</button>
    </div>
  )
}
```

In rare cases you may need to do something right after component `forceUpdate` finishes.  
In that case `useForceUpdateWithCallback` can be useful. It uses `useLayoutEffect` under the hood.

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import { useForceUpdateWithCallback } from 'use-force-update-hook'

function MyAwesomeComponent() {
  function handleUpdate() {
    console.log('just updated')
  }

  const forceUpdate = useForceUpdateWithCallback(handleUpdate)

  console.log('render')

  return (
    <div>
      <button onClick={forceUpdate}>Click to rerender MyAwesomeComponent</button>
    </div>
  )
}
```

## License

MIT (http://www.opensource.org/licenses/mit-license.php)

[deps-image]: https://img.shields.io/david/bhovhannes/use-force-update-hook.svg
[deps-url]: https://david-dm.org/bhovhannes/use-force-update-hook
[dev-deps-image]: https://img.shields.io/david/dev/bhovhannes/use-force-update-hook.svg
[dev-deps-url]: https://david-dm.org/bhovhannes/use-force-update-hook#info=devDependencies
[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE
[npm-url]: https://www.npmjs.org/package/use-force-update-hook
[npm-version-image]: https://img.shields.io/npm/v/use-force-update-hook.svg?style=flat
[npm-downloads-image]: https://img.shields.io/npm/dm/use-force-update-hook.svg?style=flat
[travis-url]: https://travis-ci.com/bhovhannes/use-force-update-hook
[travis-image]: https://img.shields.io/travis/bhovhannes/use-force-update-hook.svg?style=flat
[codecov-url]: https://codecov.io/gh/bhovhannes/use-force-update-hook
[codecov-image]: https://img.shields.io/codecov/c/github/bhovhannes/use-force-update-hook.svg
