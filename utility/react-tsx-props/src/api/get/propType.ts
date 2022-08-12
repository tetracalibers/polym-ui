import { PropWithDefault } from '../../class/PropWithDefault'

export type getPropTypes<O> = Partial<{
  readonly [k in keyof O]: O[k] extends {
    instance: PropWithDefault<infer T>
    default: infer T
  }
    ? T
    : never
}>
