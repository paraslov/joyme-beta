import { RuleSetRule } from 'webpack'
import { buildScssLoaders } from './loaders/buildScssLoaders'

export function buildLoaders(isDev: boolean): RuleSetRule[] {
  const scssLoader = buildScssLoaders(isDev)

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const babelLoader = {
    test: /\.(js|jsx|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [ '@babel/preset-env' ]
      }
    }
  }

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
