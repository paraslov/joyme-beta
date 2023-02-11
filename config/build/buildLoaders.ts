import { RuleSetRule } from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export function buildLoaders(isDev: boolean): RuleSetRule[] {
  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => resPath.includes('.module.'),
            localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
          },
        }
      },
      // Compiles Sass to CSS
      'sass-loader',
    ],
  }
  // если бы не было ts-loader, было бы необходимо добавить babel-loader, для загрузки .jsx
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
