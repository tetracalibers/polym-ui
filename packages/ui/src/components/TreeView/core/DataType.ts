export type ILeaf = { type: 'leaf'; name: string }
export type INode = { type: 'node'; name: string; items: Array<INode | ILeaf> }
