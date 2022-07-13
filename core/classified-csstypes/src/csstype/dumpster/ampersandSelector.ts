import * as doubleColonPseudoesJson from '../../../lib/cssdata/bySyntax/s_::%_e.json'
import * as singleColonPseudoesJson from '../../../lib/cssdata/bySyntax/s_:%_e.json'
import _ from 'lodash'
import shell from 'shelljs'
const { ShellString } = shell

// prettier-ignore
const doubleColonPseudoes = JSON.parse(JSON.stringify(doubleColonPseudoesJson)).default
// prettier-ignore
const singleColonPseudoes = JSON.parse(JSON.stringify(singleColonPseudoesJson)).default

// prettier-ignore
const ampersandDoubleColonPseudoes = doubleColonPseudoes.map(obj => `&${obj.keyword}`)
// prettier-ignore
const ampersandSingleColonPseudoes = singleColonPseudoes.map(obj => `&${obj.keyword}`)

// prettier-ignore
const dumper = (toUnionArray: Array<string>) => (typeName: string) => {
  const variableName = _.camelCase(typeName)
  const source = `
    const ${variableName} = ${JSON.stringify(toUnionArray)} as const
    export type ${typeName} = typeof ${variableName}[number]
  `
  new ShellString(source).to(`src/csstype/gen/ampersand-selector/${variableName}.ts`)
}

// prettier-ignore
export const dump_ampersandDoubleColonPseudoes = dumper(ampersandDoubleColonPseudoes)
// prettier-ignore
export const dump_ampersandSingleColonPseudoes = dumper(ampersandSingleColonPseudoes)
