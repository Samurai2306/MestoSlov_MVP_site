import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PlayerState {
  isPlaying: boolean
  currentTrack: string | null
  currentTime: number
  duration: number
  volume: number
  tourId: string | null
  currentPointIndex: number
}

const initialState: PlayerState = {
  isPlaying: false,
  currentTrack: null,
  currentTime: 0,
  duration: 0,
  volume: 1,
  tourId: null,
  currentPointIndex: 0,
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    play: (state) => {
      state.isPlaying = true
    },
    pause: (state) => {
      state.isPlaying = false
    },
    setCurrentTrack: (state, action: PayloadAction<string>) => {
      state.currentTrack = action.payload
    },
    setCurrentTime: (state, action: PayloadAction<number>) => {
      state.currentTime = action.payload
    },
    setDuration: (state, action: PayloadAction<number>) => {
      state.duration = action.payload
    },
    setVolume: (state, action: PayloadAction<number>) => {
      state.volume = action.payload
    },
    setTourId: (state, action: PayloadAction<string>) => {
      state.tourId = action.payload
    },
    setCurrentPointIndex: (state, action: PayloadAction<number>) => {
      state.currentPointIndex = action.payload
    },
    reset: (state) => {
      state.isPlaying = false
      state.currentTrack = null
      state.currentTime = 0
      state.duration = 0
      state.currentPointIndex = 0
    },
  },
})

export const {
  play,
  pause,
  setCurrentTrack,
  setCurrentTime,
  setDuration,
  setVolume,
  setTourId,
  setCurrentPointIndex,
  reset,
} = playerSlice.actions

export default playerSlice.reducer


