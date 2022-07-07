import _ from 'lodash'

export const sql = _.mixin({
  select: _.map,
  from: _.chain,
  where: _.filter,
  sortBy: _.sortBy,
})
