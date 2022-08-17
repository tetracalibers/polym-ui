import { $ as $$ } from 'react-tsx-props'
import { Const } from './_internal/constants'

type ProvideStyledSysCssPropertyMap<GROUP> =
  GROUP extends Const.FromStyledSystem.PropsCategory
    ? { [KEY in GROUP]: keyof Const.FromStyledSystem.Props[KEY] }
    : never

type InheritanceRefKey = `this.${Const.GroupingBased.PropsCategory}`

type TokenInUsingStyledSysProps =
  | InheritanceRefKey
  | Const.FromStyledSystem.PropsCategory
  | ProvideStyledSysCssPropertyMap<Const.FromStyledSystem.PropsCategory>

type JoinTypeInArray<T extends unknown[], RESULT = T[0]> = T extends [
  infer FIRST,
  ...infer REST
]
  ? JoinTypeInArray<REST, RESULT & FIRST>
  : RESULT

type ParseTokenInUsingStyledSysPropsList<
  TOKEN extends TokenInUsingStyledSysProps = TokenInUsingStyledSysProps
> = TOKEN extends string
  ? TOKEN extends keyof Const.FromStyledSystem.Props
    ? Const.FromStyledSystem.Props[TOKEN]
    : never
  : TOKEN extends { [k in infer OBJ_KEY]: infer OBJ_VAL }
  ? OBJ_KEY extends Const.FromStyledSystem.PropsCategory
    ? OBJ_VAL extends keyof Const.FromStyledSystem.Props[OBJ_KEY]
      ? Pick<Const.FromStyledSystem.Props[OBJ_KEY], OBJ_VAL>
      : never
    : never
  : never

type ParseUsingStyledSysPropsList<
  LIST extends TokenInUsingStyledSysProps[],
  RESULT extends ParseTokenInUsingStyledSysPropsList[] = []
> = LIST extends [infer FIRST, ...infer REST]
  ? FIRST extends TokenInUsingStyledSysProps
    ? REST extends TokenInUsingStyledSysProps[]
      ? ParseUsingStyledSysPropsList<
          REST,
          [...RESULT, ParseTokenInUsingStyledSysPropsList<FIRST>]
        >
      : ParseUsingStyledSysPropsList<[FIRST], RESULT>
    : RESULT
  : RESULT

type RemoveThis<S extends InheritanceRefKey> = S extends `this.${infer NAME}`
  ? NAME extends Const.GroupingBased.PropsCategory
    ? NAME
    : never
  : never

type GroupByWhetherInheritanceRef<
  LIST extends readonly TokenInUsingStyledSysProps[],
  OTHER extends readonly TokenInUsingStyledSysProps[] = [],
  INHERI extends readonly TokenInUsingStyledSysProps[] = []
> = LIST extends readonly [infer F, ...infer R]
  ? F extends InheritanceRefKey
    ? R extends readonly TokenInUsingStyledSysProps[]
      ? GroupByWhetherInheritanceRef<R, OTHER, [...INHERI, F]>
      : never
    : R extends readonly TokenInUsingStyledSysProps[]
    ? F extends TokenInUsingStyledSysProps
      ? GroupByWhetherInheritanceRef<R, [...OTHER, F], INHERI>
      : never
    : never
  : {
      other: OTHER
      ref: INHERI
    }

type ToStyledSysNativeProps<
  ORIGINAL extends InheritanceRefKey[],
  RESULT extends TokenInUsingStyledSysProps[] = []
> = ORIGINAL['length'] extends 0
  ? RESULT
  : ORIGINAL extends [infer F, ...infer R]
  ? F extends InheritanceRefKey
    ? R extends InheritanceRefKey[]
      ? RemoveThis<F> extends Const.GroupingBased.PropsCategory
        ? GroupByWhetherInheritanceRef<
            Const.GroupingBased.PropsMap[RemoveThis<F>]
          > extends {
            ref: infer REF
            other: infer OTHER
          }
          ? REF extends InheritanceRefKey[]
            ? OTHER extends TokenInUsingStyledSysProps[]
              ? ToStyledSysNativeProps<[...REF, ...R], [...RESULT, ...OTHER]>
              : never
            : never
          : never
        : ToStyledSysNativeProps<
            R,
            [...RESULT, ...Const.GroupingBased.PropsMap[RemoveThis<F>]]
          >
      : never
    : never
  : never

type UsingCssAsProps<KEY extends Const.GroupingBased.PropsCategory> =
  $$.Mutable<Const.GroupingBased.PropsMap[KEY]> extends infer LIST
    ? LIST extends TokenInUsingStyledSysProps[]
      ? GroupByWhetherInheritanceRef<LIST> extends {
          ref: infer REF
          other: infer OTHER
        }
        ? REF extends InheritanceRefKey[]
          ? OTHER extends TokenInUsingStyledSysProps[]
            ? JoinTypeInArray<
                [
                  ...ParseUsingStyledSysPropsList<ToStyledSysNativeProps<REF>>,
                  ...ParseUsingStyledSysPropsList<OTHER>
                ]
              >
            : never
          : never
        : never
      : never
    : never

export namespace CssProps {
  export type As<L extends Const.GroupingBased.PropsCategory> =
    UsingCssAsProps<L>
}
