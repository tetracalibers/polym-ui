/**
 * https://github.com/ghoullier/awesome-template-literal-types#css-parser
 */

type TrimWhiteSpace<Str extends string> = string extends Str
  ? 'Error'
  : Str extends ` ${infer Str}` | `\n${infer Str}`
  ? TrimWhiteSpace<Str>
  : Str

type GetType<Str extends string> = string extends Str
  ? 'Error'
  : Str extends `${infer Value}px`
  ? number
  : string

type ParseCSSProps<S extends string> =
  S extends `${infer Prop}:${infer Value};${infer Rest}`
    ? {
        [k in TrimWhiteSpace<Prop>]: GetType<TrimWhiteSpace<Value>>
      } & ParseCSSProps<Rest>
    : unknown

type GetRestCSS<Rest extends string> =
  TrimWhiteSpace<Rest> extends `${infer Content}}${infer RRest}` ? RRest : Rest

type ParseRestCSS<Rest extends string> =
  TrimWhiteSpace<Rest> extends `${infer Content}}${infer RRest}`
    ? ParseCSSProps<Content>
    : string

type ParseCSS<S extends string> = string extends S
  ? 'Error'
  : TrimWhiteSpace<S> extends `${infer ClassName} {${infer Rest}`
  ?
      | {
          [k in TrimWhiteSpace<ClassName>]: ParseRestCSS<Rest>
        }
      | ParseCSS<GetRestCSS<Rest>>
  : string
