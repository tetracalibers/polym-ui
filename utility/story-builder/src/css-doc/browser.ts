import { controlType, getSelectTypeControlOption } from '../css-control/browser'
import { AllCssProps } from 'styled-utility-first'

const controlTypeSelectAs = getSelectTypeControlOption<AllCssProps>()

export const cssPropsDoc = {
  flexDirection: {
    ...controlTypeSelectAs('flexDirection'),
  },
  fill: {
    ...controlType('text'),
  },
  direction: {
    ...controlTypeSelectAs('direction'),
  },
  transition: {
    ...controlType('text'),
  },
  willChange: {
    ...controlType('text'),
  },
  outlineWidth: {
    ...controlType('text'),
  },
  textOverflow: {
    ...controlTypeSelectAs('textOverflow'),
  },
  backgroundOrigin: {
    ...controlTypeSelectAs('backgroundOrigin'),
  },
  background: {
    ...controlType('text'),
  },
  backgroundColor: {
    ...controlType('color'),
  },
  borderRadius: {
    ...controlType('text'),
  },
  borderStyle: {
    ...controlTypeSelectAs('borderStyle'),
  },
  borderWidth: {
    ...controlType('text'),
  },
  borderColor: {
    ...controlType('color'),
  },
  boxSizing: {
    ...controlTypeSelectAs('boxSizing'),
  },
  color: {
    ...controlType('color'),
  },
  cursor: {
    ...controlTypeSelectAs('cursor'),
  },
  display: {
    ...controlTypeSelectAs('display'),
  },
  fontFamily: {
    ...controlType('text'),
  },
  fontSize: {
    ...controlType('text'),
  },
  fontWeight: {
    ...controlType('text'),
  },
  height: {
    ...controlType('text'),
  },
  lineHeight: {
    ...controlType('text'),
  },
  listStyle: {
    ...controlTypeSelectAs('listStyle'),
  },
  margin: {
    ...controlType('text'),
  },
  outline: {
    ...controlType('text'),
  },
  textRendering: {
    ...controlTypeSelectAs('textRendering'),
  },
  paddingX: {
    ...controlType('text'),
  },
  paddingY: {
    ...controlType('text'),
  },
  position: {
    ...controlTypeSelectAs('position'),
  },
  textAlign: {
    ...controlTypeSelectAs('textAlign'),
  },
  textDecoration: {
    ...controlTypeSelectAs('textDecoration'),
  },
  transitionProperty: {
    ...controlType('text'),
  },
  transitionDuration: {
    ...controlType('text'),
  },
  verticalAlign: {
    ...controlTypeSelectAs('verticalAlign'),
  },
  userSelect: {
    ...controlTypeSelectAs('userSelect'),
  },
  touchAction: {
    ...controlTypeSelectAs('touchAction'),
  },
  whiteSpace: {
    ...controlTypeSelectAs('whiteSpace'),
  },
  appearance: {
    ...controlTypeSelectAs('appearance'),
  },
  transitionTimingFunction: {
    ...controlType('text'),
  },
  wordWrap: {
    ...controlTypeSelectAs('wordWrap'),
  },
  alignItems: {
    ...controlTypeSelectAs('alignItems'),
  },
  backgroundClip: {
    ...controlTypeSelectAs('backgroundClip'),
  },
  justifyContent: {
    ...controlTypeSelectAs('justifyContent'),
  },
  backfaceVisibility: {
    ...controlTypeSelectAs('backfaceVisibility'),
  },
  overflow: {
    ...controlTypeSelectAs('overflow'),
  },
  textTransform: {
    ...controlTypeSelectAs('textTransform'),
  },
  transform: {
    ...controlType('text'),
  },
}
