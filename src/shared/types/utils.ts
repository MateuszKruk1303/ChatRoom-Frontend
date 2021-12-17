import { LoadingStatus } from './enums'

export type ValueOf<T> = T[keyof T]

export type NextFn<T> = (value: T) => void

export type Option<T = string, K = string> = {
  title: T
  subtitle?: T | string
  value: K
}

export type WithLoading<T> = T & {
  loading: boolean
}

export type ListItemData<T = {}> = T & {
  id: string
  name: string
}

export interface Resource<T = undefined, E = string> {
  data: T
  loading: LoadingStatus
  error?: E | null
}
