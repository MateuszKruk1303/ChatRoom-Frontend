import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Auth } from 'shared/services'
import * as actions from 'shared/store/auth/actions'
import { getLoginState, getRegisterState } from 'shared/store/auth/selectors'
import { LoadingStatus } from 'shared/types'

export const useAuth = () => {
  const { loading: loginLoading, error: loginError } =
    useSelector(getLoginState)
  const { loading: registerLoading, error: registerError } =
    useSelector(getRegisterState)

  const dispatch = useDispatch()
  const [error] = useState<string | null>(null)

  const isLoginLoading = loginLoading === LoadingStatus.Pending

  const isRegisterLoading = registerLoading === LoadingStatus.Pending

  const isLoading = isLoginLoading || isRegisterLoading

  const login = async (name: string, password: string) => {
    dispatch(actions.login({ name, password }))
  }

  const register = async (name: string, password: string) => {
    dispatch(actions.register({ name, password }))
  }

  const signOut = () => {}

  const isAuthenticated = !!Auth.getTokensInfo().accessToken

  return {
    isAuthenticated,
    error,
    login,
    register,
    signOut,
    isLoading,
    loginError,
    registerError,
  }
}
