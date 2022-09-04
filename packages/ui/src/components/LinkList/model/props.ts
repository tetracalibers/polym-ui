import { getDefaultProps, getPropType, NotRequired } from 'react-tsx-props'

export const styleTypeOptions = [
  'growUnderFromCenter',
  'growUnderFromLeft',
  'growUpperFromLeft',
  'growUnderFromCircle',
  'fillFromLeft',
  'fillFromUnderLine',
  'fillFromHorizontalLine',
  'borderGoAround',
  'borderMerging',
] as const
type StyleTypeOptions = typeof styleTypeOptions[number]

const conf = {
  activeNth: NotRequired<number>(1),
  styleType: NotRequired<StyleTypeOptions>('growUnderFromCenter'),
}
type Conf = typeof conf

export type CharacterProps = getPropType<Conf>
export const defaultLinkListCoreProps = {
  ...getDefaultProps<CharacterProps>(conf),
}
