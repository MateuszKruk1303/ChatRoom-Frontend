import { createAction } from '@reduxjs/toolkit'

const NAMESPACE = 'root'

export const clearState = createAction(`${NAMESPACE}/clearState`)
