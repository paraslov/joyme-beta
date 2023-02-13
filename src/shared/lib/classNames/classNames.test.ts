import { classNames } from './classNames'

describe('classNames', () => {
  test('main class name only: ', () => {
    expect(classNames('mainClass')).toBe('mainClass')
  })

  test('main class with additional classes: ', () => {
    expect(classNames('mainClass', [ 'add1', 'add2' ]))
      .toBe('mainClass add1 add2')
  })

  test('main class with additional classes and booleans true: ', () => {
    expect(classNames('mainClass', [ 'add1', 'add2' ], { hovered: true, scrollable: true }))
      .toBe('mainClass add1 add2 hovered scrollable')
  })

  test('main class with additional classes and booleans true false: ', () => {
    expect(classNames('mainClass', [ 'add1', 'add2' ], { hovered: true, scrollable: false }))
      .toBe('mainClass add1 add2 hovered')
  })

  test('main class with additional classes and booleans true undefined: ', () => {
    expect(classNames('mainClass', [ 'add1', 'add2' ], { hovered: undefined, scrollable: true }))
      .toBe('mainClass add1 add2 scrollable')
  })
})
