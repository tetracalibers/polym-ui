import jsonFormat from 'json-format'
import { createFile } from './forShell'

export const toJSON: Function = (data: object): string => {
  const config_jsonFormat = {
    type: 'space',
    size: 2
  }
  return jsonFormat(data, config_jsonFormat)
}

export const createJsonFile: Function = (data: object, filePath: string): void => {
  createFile(toJSON(data), `${filePath}.json`)
}