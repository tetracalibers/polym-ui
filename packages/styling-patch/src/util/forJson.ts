import jsonFormat from 'json-format'
import { createFile } from './forShell'

const config_jsonFormat = {
  type: 'space',
  size: 2
}

export const toJSON: Function = (data: object): string => {
  return jsonFormat(data, config_jsonFormat)
}

export const createJsonFile: Function = (data: object, filePath: string): void => {
  createFile(toJSON(data), `${filePath}.json`)
}