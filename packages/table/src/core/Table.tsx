import { ComponentPropsWithoutRef, FC, ReactElement, ReactNode } from 'react'

type FormatRender = (children: ReactNode) => ReactElement

type FormatRenderWithKey<T extends 'td' | 'tr'> = (
  children: T extends 'tr' ? ReactNode : string,
  key: number | string
) => ReactElement

type TBodyData = {
  header: string
  cellData: string[]
}[]

type TableProps = Omit<ComponentPropsWithoutRef<'table'>, 'children'> & {
  data: TBodyData
  Thead?: FC
  Tfoot?: FC
  format?: {
    th?: FormatRender
    td?: FormatRenderWithKey<'td'>
    tr?: FormatRenderWithKey<'tr'>
    tbody?: FormatRender
    thead?: FormatRender
    tfoot?: FormatRender
    table?: FormatRender
  }
}

export const Table: FC<TableProps> = ({
  data,
  format,
  Thead,
  Tfoot,
}: TableProps) => {
  const Th = format?.th ?? ((children: ReactNode) => <th>{children}</th>)
  const Td = format?.td ?? ((children: ReactNode) => <td>{children}</td>)
  const Tr = format?.tr ?? ((children: ReactNode) => <tr>{children}</tr>)
  const Tbody =
    format?.tbody ?? ((children: ReactNode) => <tbody>{children}</tbody>)
  const Table =
    format?.table ?? ((children: ReactNode) => <table>{children}</table>)

  return Table(
    <>
      {Thead && <Thead />}
      {Tbody(
        data.map(({ header, cellData }, trIdx) =>
          Tr(
            <>
              {Th(header)}
              {cellData.map((d, tdIdx) => Td(d, tdIdx))}
            </>,
            trIdx
          )
        )
      )}
      {Tfoot && <Tfoot />}
    </>
  )
}
