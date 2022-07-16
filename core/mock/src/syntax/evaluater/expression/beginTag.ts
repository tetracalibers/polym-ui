export const evalBeginTag = (tokens: StylePatch.ParseResult[]) => {
  const [openT, tagNameT, ...restTs] = tokens
  const { token: tagName } = tagNameT
  if (tagName === 'StylePatch') {
    return
  }
  if (restTs.length > 1) {
  }
}
