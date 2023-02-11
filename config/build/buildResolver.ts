import { ResolveOptions } from 'webpack'
import { BuildPaths } from './types/config'

export function buildResolver(paths: BuildPaths): ResolveOptions {
  return {
    // imports auto complete (./Component[.tsx])
    extensions: [ '.tsx', '.ts', '.js' ],
    preferAbsolute: true,
    modules: [ paths.src, 'node_modules' ],
    mainFiles: [ 'index' ],
    alias: {},
  }
}
