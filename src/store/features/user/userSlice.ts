'use client'
import { InfoJobsCandidateResposne } from '@/lib/infojobs/types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: InfoJobsCandidateResposne = {
  id: 0,
  email: '',
  emailHash: '',
  key: '',
  hasPhoto: false,
  photo: '',
  name: '',
  surname1: '',
  surname2: '',
  fullName: '',
  city: '',
  province: {
    id: 0,
    value: ''
  },
  publicProfileLink: '',
  status: 0,
  validatedMail: 0,
  accountCreation: '',
  lastCVUpdate: '',
  lastInscripcion: '',
  extendedBannerAttributes: '',
  subSegment: '',
  doesNotWantNotifications: false,
  photoAccepted: false
}

export const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<InfoJobsCandidateResposne>) => {
      return action.payload
    },
    cleanUserState: (state) => {
      return initialState
    }
  }
})

export const { login, cleanUserState } = user.actions
export default user.reducer
