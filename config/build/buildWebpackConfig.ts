import { buildLoaders } from './buildLoaders'
import { buildResolver } from './buildResolver'
import { buildPlugins } from './buildPlugins'
import { BuildOptions } from './types/config'
import { Configuration } from 'webpack'

export function buildWebpackConfig(options: BuildOptions): Configuration {
  const { mode, paths } = options

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
    },
    module: {
      // file compilers that not .js
      rules: buildLoaders(),
    },
    resolve: buildResolver(),
    plugins: buildPlugins(paths),
  }
}
