import { createSelector } from '@reduxjs/toolkit'
import { RootState } from 'app'

export const getAuthData = (state: RootState) => state.common.auth

export const getRegisterState = createSelector(
  getAuthData,
  auth => auth.register
)

export const getLoginState = createSelector(getAuthData, auth => auth.login)

export const getCurrentUser = createSelector(
  getAuthData,
  auth => auth.login.data
)
