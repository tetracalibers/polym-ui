import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs'

const DesignConcepts = () => (
  <>
    <section className='bytomixy'>
      <h1>placeholder</h1>
      <p lang='en'>
        Placeholders are not recommended as a means of providing input hints to
        users because of the following disadvantages
      </p>
      <p lang='ja'>
        プレースホルダーは次のようなデメリットがあることから、ユーザに入力ヒントを与える手段としては推奨しない。
      </p>
      <ul>
        <li>
          <h2>Hotbed of input errors</h2>
          <p lang='en'>Cannot refer to hints when typing</p>
          <p lang='ja'>入力時にヒントを参照できない</p>
        </li>
        <li>
          <h2>Unfriendly contrast</h2>
          <p lang='en'>
            Gray text on a white background has low contrast and leaves users
            with visual concerns behind.
          </p>
          <p lang='ja'>
            白地にグレーのテキストはコントラストが低く、視覚に不安があるユーザを置き去りにする
          </p>
        </li>
        <li>
          <h2>accessibility failure</h2>
          <p lang='en'>
            Some browsers and screen readers do not support placeholders
          </p>
          <p lang='ja'>
            プレースホルダーをサポートしていないブラウザやスクリーンリーダーがある
          </p>
        </li>
        <li>
          <h2>Uncertain Indication</h2>
          <p lang='en'>Long hint texts are not seen through the input box</p>
          <p lang='ja'>
            長いヒントテキストは入力ボックスからはみ出て見切れてしまう
          </p>
        </li>
      </ul>
    </section>
  </>
)

export const DocsPage = () => (
  <>
    <Title />
    <Subtitle />
    <Description />
    <Primary />
    <ArgsTable story={PRIMARY_STORY} />
    <DesignConcepts />
    <Stories />
  </>
)
