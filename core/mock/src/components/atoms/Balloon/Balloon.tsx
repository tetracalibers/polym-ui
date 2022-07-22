import { FC, ReactNode, HTMLAttributes } from 'react'
import { StylePatch } from '@react-polyhex-ui/styling-patch'
import classNames from 'classnames'

type SpanProps = HTMLAttributes<HTMLSpanElement>

type Props = {
  children: ReactNode
} & SpanProps

const Balloon: FC<Props> = ({ children = '', ...spanProps }) => {
  const array = new Array(3)

  return (
    <StylePatch>
      {array.map(item => (
        <span
          className={classNames('foo', { bar: true, duck: false }, 'baz', {
            quux: true,
          })}
          {...spanProps}
          key={item}
        >
          {children}
        </span>
      ))}
    </StylePatch>
  )
}

export default Balloon
