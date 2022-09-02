import {
  getDefaultProps,
  getPropType,
  NotRequired,
  Required,
} from 'react-tsx-props'

const conf = {}
type Conf = typeof conf

export type CoreProps = getPropType<Conf>
export const defaultInputCoreProps = {
  ...getDefaultProps<CoreProps>(conf),
}

/* -------------------------------------------- */

const numberConf = {
  stepper: NotRequired<boolean>(true),
}

export type NumberInputProps = getPropType<typeof numberConf>
export const defaultNumberInputProps = {
  ...defaultInputCoreProps,
  ...getDefaultProps<NumberInputProps>(numberConf),
}
