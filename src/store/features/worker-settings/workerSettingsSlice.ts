'use client'
import { CountryValue } from '@/components/ui/inputs/CountryInput'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface IWorkerSettings {
  presentation: string
  countrysOfInterest: CountryValue[]
}

const initialState: IWorkerSettings = {
  presentation: '',
  countrysOfInterest: []
}

export const workerSettings = createSlice({
  name: 'wokerSettings',
  initialState,
  reducers: {
    saveSettings: (state, action: PayloadAction<IWorkerSettings>) => {
      return action.payload
    },
    resetSettings: (state) => {
      return initialState
    }
  }
})

export const { saveSettings, resetSettings } = workerSettings.actions
export default workerSettings.reducer
