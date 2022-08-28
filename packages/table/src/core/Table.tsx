import { ComponentPropsWithoutRef, FC, ReactElement, ReactNode } from 'react'

type FormatRender = (children: ReactNode) => ReactElement

type FormatRenderWithKey<T extends 'td' | 'tr'> = (
  children: T extends 'tr' ? ReactNode : string,
  key: number | string
) => ReactElement

export type TBodyData = {
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
  // prettier-ignore
  const Td = format?.td ?? ((children: ReactNode, key: number | string) => <td key={key}>{children}</td>)
  // prettier-ignore
  const Tr = format?.tr ?? ((children: ReactNode, key: number | string) => <tr key={key}>{children}</tr>)
  // prettier-ignore
  const Table = format?.table ?? ((children: ReactNode) => <table>{children}</table>)

  return Table(
    <>
      {Thead && <Thead />}
      <tbody>
        {data.map(({ header, cellData }) =>
          Tr(
            <>
              {Th(header)}
              {cellData.map(d => Td(d, `${header}_${d}`))}
            </>,
            header
          )
        )}
      </tbody>
      {Tfoot && <Tfoot />}
    </>
  )
}
