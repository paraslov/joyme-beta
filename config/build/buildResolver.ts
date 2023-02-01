import { ResolveOptions } from 'webpack'

export function buildResolver(): ResolveOptions {
  return {
    // imports auto complete (./Component[.tsx])
    extensions: ['.tsx', '.ts', '.js'],
  }
}
