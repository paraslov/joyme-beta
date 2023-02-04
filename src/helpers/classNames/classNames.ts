type Conditional = Record<string, boolean>

export const classNames = (main: string, add: string[], conditional: Conditional = {}) => {
  return [
    main,
    ...add,
    ...Object.entries(conditional).filter(([cls, val]) => val).map(([cls, val]) => cls)
  ].join(' ')
}
