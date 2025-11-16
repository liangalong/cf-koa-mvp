import { ProjectType, WebGroupNames, NodeRuntimes } from '@bit/zeus-core'

/**@type {import('@bit/zeus-core').Config}} */
const config = {
  type: ProjectType.KoaSsrLambda,
  group: WebGroupNames.WebPlatformServicesGroup,
  name: 'web-koa-cf',
  runtime: NodeRuntimes['20.10.0'],
  webapck: env => {
    return {
      publicPath: '',
      port: 3000,
      inputPath: {
        client: 'src/client'
      }
    }
  },
}

export default config
