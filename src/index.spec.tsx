import * as React from 'react'
import { render, fireEvent, cleanup } from 'react-testing-library'
import { useForceUpdate, useForceUpdateWithCallback } from './index'

describe('useForceUpdate hook', function() {
  beforeEach(function() {})

  afterEach(cleanup)

  it('should update component when called', function() {
    const renderSpy = jest.fn()

    function Component() {
      const forceUpdate = useForceUpdate()
      renderSpy()
      return (
        <button data-testid="btn" onClick={forceUpdate}>
          Click me
        </button>
      )
    }

    const { getByTestId } = render(<Component />)

    expect(renderSpy).toHaveBeenCalledTimes(1)
    fireEvent.click(getByTestId('btn'))
    expect(renderSpy).toHaveBeenCalledTimes(2)
    fireEvent.click(getByTestId('btn'))
    expect(renderSpy).toHaveBeenCalledTimes(3)
    fireEvent.click(getByTestId('btn'))
    expect(renderSpy).toHaveBeenCalledTimes(4)
    fireEvent.click(getByTestId('btn'))
    expect(renderSpy).toHaveBeenCalledTimes(5)
  })

  it('should return the same reference during each render', function() {
    const refs = new Set()

    function Component() {
      const forceUpdate = useForceUpdate()
      refs.add(forceUpdate)
      return (
        <button data-testid="btn" onClick={forceUpdate}>
          Click me
        </button>
      )
    }

    const { getByTestId } = render(<Component />)

    fireEvent.click(getByTestId('btn'))
    fireEvent.click(getByTestId('btn'))
    expect(refs.size).toBe(1)
  })
})

describe('useForceUpdateWithCallback hook', function() {
  beforeEach(function() {})

  afterEach(cleanup)

  it('should update component when called', function() {
    const renderSpy = jest.fn()

    function Component() {
      const forceUpdate = useForceUpdate()
      renderSpy()
      return (
        <button data-testid="btn" onClick={forceUpdate}>
          Click me
        </button>
      )
    }

    const { getByTestId } = render(<Component />)

    expect(renderSpy).toHaveBeenCalledTimes(1)
    fireEvent.click(getByTestId('btn'))
    expect(renderSpy).toHaveBeenCalledTimes(2)
    fireEvent.click(getByTestId('btn'))
    expect(renderSpy).toHaveBeenCalledTimes(3)
    fireEvent.click(getByTestId('btn'))
    expect(renderSpy).toHaveBeenCalledTimes(4)
    fireEvent.click(getByTestId('btn'))
    expect(renderSpy).toHaveBeenCalledTimes(5)
  })

  it('should return the same reference during each render', function() {
    const refs = new Set()

    function Component() {
      const forceUpdate = useForceUpdate()
      refs.add(forceUpdate)
      return (
        <button data-testid="btn" onClick={forceUpdate}>
          Click me
        </button>
      )
    }

    const { getByTestId } = render(<Component />)

    fireEvent.click(getByTestId('btn'))
    fireEvent.click(getByTestId('btn'))
    expect(refs.size).toBe(1)
  })

  it('should update component when called executing callback function', function() {
    const cb = jest.fn()

    function Component() {
      const forceUpdate = useForceUpdateWithCallback(cb)
      return (
        <button data-testid="btn" onClick={forceUpdate}>
          Click me
        </button>
      )
    }

    const { getByTestId } = render(<Component />)

    fireEvent.click(getByTestId('btn'))
    fireEvent.click(getByTestId('btn'))
    expect(cb).toHaveBeenCalledTimes(2)
  })

  it('should not execute callback after first render', function() {
    const cb = jest.fn()

    function Component() {
      useForceUpdateWithCallback(cb)
      return <button>Click me</button>
    }

    render(<Component />)

    expect(cb).toHaveBeenCalledTimes(0)
  })

  it('should not execute callback if render was not triggered by forceUpdate call', function() {
    const cb1 = jest.fn()
    const cb2 = jest.fn()

    function Component() {
      const [value, setValue] = React.useState(false)
      useForceUpdateWithCallback(value ? cb1 : cb2)
      return (
        <button data-testid="btn" onClick={() => setValue(v => !v)}>
          Click me
        </button>
      )
    }

    const { getByTestId } = render(<Component />)

    fireEvent.click(getByTestId('btn'))
    fireEvent.click(getByTestId('btn'))
    expect(cb1).toHaveBeenCalledTimes(0)
    expect(cb2).toHaveBeenCalledTimes(0)
  })
})
