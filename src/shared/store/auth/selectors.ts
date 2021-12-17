import { createSelector } from '@reduxjs/toolkit'
import { RootState } from 'app'

export const getAuthData = (state: RootState) => state.common.auth

export const getSignInState = createSelector(getAuthData, auth => auth.signIn)

export const getCurrentUser = createSelector(
  getAuthData,
  auth => auth.currentUser
)
