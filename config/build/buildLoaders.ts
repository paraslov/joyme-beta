import { RuleSetRule } from 'webpack'
import { buildScssLoaders } from './loaders/buildScssLoaders'
import { buildBabelLoader } from './loaders/buildBabelLoader'

export function buildLoaders(isDev: boolean): RuleSetRule[] {
  const scssLoader = buildScssLoaders(isDev)

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const babelLoader = buildBabelLoader(isDev)

  const svgLoader = {
    test: /\.svg$/,
    use: [ '@svgr/webpack' ],
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  }

  return [
    fileLoader,
    svgLoader,
    babelLoader,
    tsLoader,
    scssLoader,
  ]
}
