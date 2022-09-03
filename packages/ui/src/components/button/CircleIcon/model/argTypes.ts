import { defaultProps } from './props'
import { CssStyle } from 'ts-typedef-helper'
import { useSetDefaultAs } from 'story-builder'
import { defaultButtonCoreProps } from '../../../core/Button/model/props'
import { coreArgTypes } from '../../../core/Button/model/argTypes'
const withDefaultAs = useSetDefaultAs(defaultProps)
import _ from 'lodash'
import { iconOnlyCoreArgTypes } from '../../../core/IconOnly/model/argTypes'

export const thisArgTypes = {
  ...iconOnlyCoreArgTypes,
}
