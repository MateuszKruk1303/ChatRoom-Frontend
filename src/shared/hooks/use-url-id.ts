import { useLocation } from 'react-router'

export const useUrlId = (): string => {
  const { pathname } = useLocation()
  const parts = pathname.split('/')
  return parts[parts.length - 1]
}
