import { dumpJson } from 'json-microscope'
import { mdnCssProperties, withoutVendorProperties, final } from './browser'

dumpJson(mdnCssProperties)('tmp/all.json')
dumpJson(withoutVendorProperties)('tmp/without-vendor.json')
dumpJson(final)('tmp/final.json')
