export const generateTableData = (group = 5, itemInGroup = 3) =>
  [...new Array(group)].map((_, idx) => ({
    header: `Heading Cell ${idx + 1}`,
    cellData: [...new Array(itemInGroup)].map(
      (_, idx2) => `Data Cell ${idx + 1}-${idx2 + 1}`
    ),
  }))
