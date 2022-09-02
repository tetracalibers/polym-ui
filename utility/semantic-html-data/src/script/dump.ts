import { dumpJson } from 'json-microscope'
import * as htmlTagsJson from '@vscode/web-custom-data/data/browsers.html-data.json'
import _ from 'lodash'

type Attrs = {
  [tag in keyof HTMLElementTagNameMap]: string[]
}

const htmlTags = JSON.parse(JSON.stringify(htmlTagsJson)).tags

export const attrs = _.mapValues(_.keyBy(htmlTags, 'name'), val =>
  val.attributes.map((attr: { name: keyof HTMLElementTagNameMap }) => attr.name)
) as Attrs

dumpJson(attrs)('src/data/html-attrs.json')
