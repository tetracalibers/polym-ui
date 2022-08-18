import { $ as $$ } from 'react-tsx-props'
import { StyledSystem } from '../constants/cssprops'
import { Pseudo } from '../constants/pseudo'

type ProvideStyledSysCssPropertyMap<GROUP = StyledSystem.PropsCategory> =
  GROUP extends StyledSystem.PropsCategory
    ? {
        [KEY in GROUP]: keyof StyledSystem.Props[KEY]
      }
    : never

type JoinTypeInArray<T extends unknown[], RESULT = T[0]> = T extends [
  infer FIRST,
  ...infer REST
]
  ? JoinTypeInArray<REST, RESULT & FIRST>
  : RESULT

type ParseConfValue<ConfValues, Value extends ConfValues> = Value extends string
  ? Value extends keyof StyledSystem.Props
    ? StyledSystem.Props[Value]
    : never
  : Value extends { [k in infer OBJ_KEY]: infer OBJ_VAL }
  ? OBJ_KEY extends StyledSystem.PropsCategory
    ? OBJ_VAL extends keyof StyledSystem.Props[OBJ_KEY]
      ? Pick<StyledSystem.Props[OBJ_KEY], OBJ_VAL>
      : never
    : never
  : never

type ParseConfValuesList<
  ConfValues,
  LIST extends ConfValues[],
  RESULT extends ParseConfValue<ConfValues, ConfValues>[] = []
> = LIST extends [infer FIRST, ...infer REST]
  ? FIRST extends ConfValues
    ? REST extends ConfValues[]
      ? ParseConfValuesList<
          ConfValues,
          REST,
          [...RESULT, ParseConfValue<ConfValues, FIRST>]
        >
      : ParseConfValuesList<ConfValues, [FIRST], RESULT>
    : RESULT
  : RESULT

type InheritanceRefKey<PropsMap> = keyof PropsMap extends string
  ? `this.${keyof PropsMap}`
  : never

type ConfValues<PropsMap> =
  | StyledSystem.PropsCategory
  | InheritanceRefKey<PropsMap>
  | ProvideStyledSysCssPropertyMap<StyledSystem.PropsCategory>

type PropsMapFormat<PropsMap> = {
  readonly [Key in keyof PropsMap]: readonly ConfValues<PropsMap>[]
}

type RemoveThis<
  PropsMap,
  S extends InheritanceRefKey<PropsMap>
> = S extends `this.${infer NAME}`
  ? NAME extends keyof PropsMap
    ? NAME
    : never
  : never

type GroupByWhetherInheritanceRef<
  PropsMap,
  LIST extends readonly ConfValues<PropsMap>[],
  OTHER extends readonly ConfValues<PropsMap>[] = [],
  INHERI extends readonly InheritanceRefKey<PropsMap>[] = []
> = LIST extends readonly [infer F, ...infer R]
  ? F extends InheritanceRefKey<PropsMap>
    ? R extends readonly ConfValues<PropsMap>[]
      ? GroupByWhetherInheritanceRef<PropsMap, R, OTHER, [...INHERI, F]>
      : never
    : R extends readonly ConfValues<PropsMap>[]
    ? F extends ConfValues<PropsMap>
      ? GroupByWhetherInheritanceRef<PropsMap, R, [...OTHER, F], INHERI>
      : never
    : never
  : {
      other: OTHER
      ref: INHERI
    }

type ToStyledSysNativeProps<
  PropsCategory,
  PropsMap extends PropsMapFormat<PropsMap>,
  ORIGINAL extends InheritanceRefKey<PropsMap>[],
  RESULT extends ConfValues<PropsMap>[] = []
> = ORIGINAL['length'] extends 0
  ? RESULT
  : ORIGINAL extends [infer F, ...infer R]
  ? F extends InheritanceRefKey<PropsMap>
    ? R extends InheritanceRefKey<PropsMap>[]
      ? RemoveThis<PropsMap, F> extends keyof PropsMap
        ? GroupByWhetherInheritanceRef<
            PropsMap,
            PropsMap[RemoveThis<PropsMap, F>]
          > extends {
            ref: infer REF
            other: infer OTHER
          }
          ? REF extends InheritanceRefKey<PropsMap>[]
            ? OTHER extends ConfValues<PropsMap>[]
              ? ToStyledSysNativeProps<
                  PropsCategory,
                  PropsMap,
                  [...REF, ...R],
                  [...RESULT, ...OTHER]
                >
              : never
            : never
          : never
        : ToStyledSysNativeProps<
            PropsCategory,
            PropsMap,
            R,
            [...RESULT, ...PropsMap[RemoveThis<PropsMap, F>]]
          >
      : never
    : never
  : never

export type AllRequiredCssProps<
  PropsMap extends PropsMapFormat<PropsMap>,
  PickKey extends keyof PropsMap
> = $$.Mutable<PropsMap[PickKey]> extends infer LIST
  ? LIST extends ConfValues<PropsMap>[]
    ? GroupByWhetherInheritanceRef<PropsMap, LIST> extends {
        ref: infer REF
        other: infer OTHER
      }
      ? REF extends InheritanceRefKey<PropsMap>[]
        ? OTHER extends ConfValues<PropsMap>[]
          ? JoinTypeInArray<
              [
                ...ParseConfValuesList<
                  ConfValues<PropsMap>,
                  ToStyledSysNativeProps<keyof PropsMap, PropsMap, REF>
                >,
                ...ParseConfValuesList<ConfValues<PropsMap>, OTHER>
              ]
            >
          : never
        : never
      : never
    : never
  : never

export type PseudoProps<Props, Property extends keyof Props> = {
  // @ts-ignore
  [Selector in `${Pseudo}${Capitalize<Property>}`]: Props[Property]
}

export type CssProps<
  PropsMap extends PropsMapFormat<PropsMap>,
  PickKey extends keyof PropsMap
> = Partial<AllRequiredCssProps<PropsMap, PickKey>> &
  PseudoProps<
    AllRequiredCssProps<PropsMap, PickKey>,
    keyof AllRequiredCssProps<PropsMap, PickKey>
  >
