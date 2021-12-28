import { createSelector } from '@reduxjs/toolkit'
import { RootState } from 'app'

export const getHomeState = (state: RootState) => state.home

export const getMessages = createSelector(getHomeState, state => state.messages)

export const getAllUsers = createSelector(getHomeState, state => state.users)

export const getActiveUsers = createSelector(
  getHomeState,
  state => state.activeUsers
)
