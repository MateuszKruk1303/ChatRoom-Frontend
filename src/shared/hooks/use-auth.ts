import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signIn as signInAction } from 'shared/store/auth/actions'
import { getSignInState } from 'shared/store/auth/selectors'

export const useAuth = () => {
  const { loading } = useSelector(getSignInState)
  const dispatch = useDispatch()
  const [error] = useState<string | null>(null)

  const signIn = async (username: string, password: string) => {
    dispatch(signInAction({ username, password }))
  }

  const signOut = () => {}

  const isAuthenticated = false

  return {
    isAuthenticated,
    error,
    signIn,
    signOut,
    loading,
  }
}
