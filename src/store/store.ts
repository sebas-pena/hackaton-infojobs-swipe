'use client'

import { configureStore } from '@reduxjs/toolkit'
import appReducer from './features/app/appSlice'
import userReducer from './features/user/userSlice'
import workerSettingsReducer from './features/worker-settings/workerSettingsSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    app: appReducer,
    workerSettings: workerSettingsReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
