import {
  borderHoverEffectOptions,
  defaultBorderLinkListProps,
  defaultFillLinkListProps,
  defaultLinkListCoreProps,
  fillHoverEffectOptions,
  underlineHoverEffectOptions,
} from '../index'
import { CssStyle } from 'ts-typedef-helper'
import { defaultUnderLineLinkListProps } from '..'

export const coreArgTypes = {
  initialActiveNth: {
    control: {
      type: 'number',
    },
    description: '',
    table: {
      type: {
        summary: null,
      },
      category: 'init',
      defaultValue: {
        summary: defaultLinkListCoreProps.initialActiveNth,
        details: null,
      },
    },
  },
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
