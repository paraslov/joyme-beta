import webpack, { RuleSetRule } from 'webpack'
import path from 'path'
import { buildScssLoaders } from '../build/loaders/buildScssLoaders'

export default ({ config }: { config: webpack.Configuration }) => {
  const srcPath = path.resolve(__dirname, '..', '..', 'src')

  config.resolve.modules.push(srcPath)
  config.resolve.extensions.push('.ts', '.tsx')
  config.module.rules.push(buildScssLoaders(true))

  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i }
    }

    return rule
  })
  config.module.rules.push({
    test: /\.svg$/,
    use: [ '@svgr/webpack' ],
  })

  return config
}
