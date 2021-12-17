import { LoadingStatus, Resource } from '../types'

export const initResource = <T = undefined, E = undefined>(
  initialData?: T
): Resource<T, E> => ({
  data: initialData as T,
  loading: LoadingStatus.Idle,
  error: null,
})

export const setPending = <T, E = undefined>(
  resource: Resource<T, E>,
  data?: T
) => {
  resource.loading = LoadingStatus.Pending
  resource.error = null
  if (data) {
    resource.data = data
  }
}

export const setSucceeded = <T = undefined, E = undefined>(
  resource: Resource<T | undefined, E>,
  data?: T
) => {
  resource.loading = LoadingStatus.Succeeded
  if (typeof data !== 'undefined') {
    resource.data = data
  }
}

export const setFailed = <T, E = string>(
  resource: Resource<T, E>,
  error?: E | null
) => {
  resource.loading = LoadingStatus.Failed
  resource.error = error
}
