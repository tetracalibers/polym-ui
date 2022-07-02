import jsonFormat from 'json-format'
import * as shell from 'shelljs'

const config_jsonFormat = {
  type: 'space',
  size: 2
}

function toJSON (data: object): string {
  return jsonFormat(data, config_jsonFormat)
}

export function createJsonFile (data: object, fileName: string): void {
  if (!shell.test('-e', 'tmp')) shell.mkdir('tmp')
  shell.cd('tmp')
  shell.ShellString(toJSON(data)).to(`${fileName}.json`)
  shell.cd('..')
}