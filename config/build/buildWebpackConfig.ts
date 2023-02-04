import { BuildOptions } from './types/config'
import { Configuration } from 'webpack'
import { buildLoaders } from './buildLoaders'
import { buildResolver } from './buildResolver'
import { buildPlugins } from './buildPlugins'
import { buildDevServer } from './buildDevServer'

export function buildWebpackConfig(options: BuildOptions): Configuration {
  const { mode, paths, port, isDev } = options

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
      rules: buildLoaders(isDev),
    },
    resolve: buildResolver(paths),
    plugins: buildPlugins(paths),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(port) : undefined,
  }
}
