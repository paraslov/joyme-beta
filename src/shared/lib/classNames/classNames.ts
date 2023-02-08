type Conditional = Record<string, boolean>

export const classNames = (main: string, add: string[], conditional: Conditional = {}) => {
  return [
    main,
    ...add.filter(Boolean),
    ...Object.entries(conditional).filter(([cls, val]) => val).map(([cls]) => cls)
  ].join(' ')
}
