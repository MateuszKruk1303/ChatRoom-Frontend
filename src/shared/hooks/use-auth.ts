import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Auth } from 'shared/services'
import * as actions from 'shared/store/auth/actions'
import root from 'shared/store/root'
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

  const getCurrentUser = async () => dispatch(actions.getCurrentUser())

  const login = async (name: string, password: string) => {
    dispatch(actions.login({ name, password }))
  }

  const register = async (name: string, password: string) => {
    dispatch(actions.register({ name, password }))
  }

  const logout = () => {
    dispatch(actions.logout())
    dispatch(root.actions.clearState())
  }

  const isAuthenticated = !!Auth.getTokensInfo().accessToken

  return {
    isAuthenticated,
    getCurrentUser,
    error,
    login,
    register,
    logout,
    isLoading,
    loginError,
    registerError,
  }
}
