import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

// デフォルトのhtml, head, bodyタグを上書き
export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () => {
        return originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        })
      }

      // 初期値を流用
      const initialProps = await Document.getInitialProps(ctx)

      // styleを注入
      return {
        ...initialProps,
        styles: [
          // 元々のスタイル
          initialProps.styles,
          // styled-componentsから注入
          sheet.getStyleElement(),
        ],
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin={'true'}
          />
          <link
            href='https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital@0;1&family=Inconsolata:wght@300;400&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
