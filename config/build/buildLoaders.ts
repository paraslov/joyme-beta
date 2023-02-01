import { RuleSetRule } from 'webpack'

export function buildLoaders(): RuleSetRule[] {
  return [
    {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    },
  ]
}
