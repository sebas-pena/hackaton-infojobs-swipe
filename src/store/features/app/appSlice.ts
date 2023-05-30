'use client'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface IAppState {
  loggedIn: boolean
  guest: boolean
  isWorker: boolean
  userSettings: boolean
  jobOfferCount: number
}

const initialState: IAppState = {
  loggedIn: false,
  guest: true,
  isWorker: false,
  userSettings: false,
  jobOfferCount: 0
}

export const app = createSlice({
  name: 'app',
  initialState,
  reducers: {
    loggedAsGuest: (state) => {
      state.loggedIn = true
      state.guest = true
    },
    loggedAsWorker: (state) => {
      state.loggedIn = true
      state.guest = false
      state.isWorker = true
    },
    logout: (state) => {
      state.loggedIn = false
      state.guest = false
      state.isWorker = false
    },
    userSettings: (state) => {
      state.userSettings = true
    },
    setJobOfferCount: (state, action: PayloadAction<number>) => {
      state.jobOfferCount = action.payload
    },
    increaseJobOfferCount: (state) => {
      state.jobOfferCount++
    }
  }
})

export const { loggedAsGuest, loggedAsWorker, logout } = app.actions
export default app.reducer
