import { RuleSetRule } from 'webpack'

export function buildLoaders(): RuleSetRule[] {
  const scssLoader = {
      test: /\.s[ac]ss$/i,
      use: [
        // Creates `style` nodes from JS strings
        "style-loader",
        // Translates CSS into CommonJS
        "css-loader",
        // Compiles Sass to CSS
        "sass-loader",
      ],
    }
    // если бы не было ts-loader, было бы необходимо добавить babel-loader, для загрузки .jsx
    const tsLoader = {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    }

  return [
    tsLoader,
    scssLoader,
  ]
}
