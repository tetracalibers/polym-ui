import { getDefaultProps, getPropType, Required } from 'react-tsx-props'

export const htmlTagType = ['button', 'a'] as const
export type HtmlTagType = typeof htmlTagType[number]

const conf = {
  as: Required<HtmlTagType>('button'),
}
type Conf = typeof conf

export type CommonProps = getPropType<Conf>
export const commonDefaultProps = {
  ...getDefaultProps<CommonProps>(conf),
}
