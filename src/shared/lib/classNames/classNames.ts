type Conditional = Record<string, boolean | undefined>

export const classNames = (main: string, add: Array<string | undefined> = [], conditional: Conditional = {}) => {
  return [
    main,
    ...add.filter(Boolean),
    ...Object.entries(conditional).filter(([ _, val ]) => val).map(([ cls ]) => cls)
  ].join(' ').trim()
}
