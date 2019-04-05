# use-force-update-hook

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
