import {
  borderHoverEffectOptions,
  defaultBorderLinkListProps,
  defaultFillLinkListProps,
  fillHoverEffectOptions,
  underlineHoverEffectOptions,
} from '../index'
import { CssStyle } from 'ts-typedef-helper'
import { defaultUnderLineLinkListProps } from '..'

export const coreArgTypes = {
  // styleType: {
  //   control: {
  //     type: 'radio',
  //   },
  //   options: styleTypeOptions,
  //   description: '',
  //   table: {
  //     type: {
  //       summary: null,
  //     },
  //     category: 'effect',
  //     defaultValue: {
  //       summary: defaultLinkListCoreProps.styleType,
  //       details: null,
  //     },
  //   },
  // },
}

export const underlineVerArgTypes = {
  ...coreArgTypes,
  hoverEffect: {
    control: {
      type: 'radio',
    },
    options: underlineHoverEffectOptions,
    description: '',
    table: {
      type: {
        summary: null,
      },
      category: 'effect',
      defaultValue: {
        summary: defaultUnderLineLinkListProps.hoverEffect,
        details: null,
      },
    },
  },
}

export const fillVerArgTypes = {
  ...coreArgTypes,
  hoverEffect: {
    control: {
      type: 'radio',
    },
    options: fillHoverEffectOptions,
    description: '',
    table: {
      type: {
        summary: null,
      },
      category: 'effect',
      defaultValue: {
        summary: defaultFillLinkListProps.hoverEffect,
        details: null,
      },
    },
  },
}

export const borderVerArgTypes = {
  ...coreArgTypes,
  hoverEffect: {
    control: {
      type: 'radio',
    },
    options: borderHoverEffectOptions,
    description: '',
    table: {
      type: {
        summary: null,
      },
      category: 'effect',
      defaultValue: {
        summary: defaultBorderLinkListProps.hoverEffect,
        details: null,
      },
    },
  },
}