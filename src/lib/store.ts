import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import toursReducer from './slices/toursSlice'
import playerReducer from './slices/playerSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tours: toursReducer,
    player: playerReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

