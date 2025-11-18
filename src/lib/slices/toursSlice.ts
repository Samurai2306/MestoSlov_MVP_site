import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Tour } from '@/types'

interface ToursState {
  tours: Tour[]
  filteredTours: Tour[]
  selectedTour: Tour | null
  filters: {
    city: string
    category: string
    duration: string
    search: string
    priceMin: string
    priceMax: string
  }
  loading: boolean
}

const initialState: ToursState = {
  tours: [],
  filteredTours: [],
  selectedTour: null,
  filters: {
    city: '',
    category: '',
    duration: '',
    search: '',
    priceMin: '',
    priceMax: '',
  },
  loading: false,
}

const toursSlice = createSlice({
  name: 'tours',
  initialState,
  reducers: {
    setTours: (state, action: PayloadAction<Tour[]>) => {
      state.tours = action.payload
      state.filteredTours = action.payload
    },
    setSelectedTour: (state, action: PayloadAction<Tour | null>) => {
      state.selectedTour = action.payload
    },
    setFilters: (state, action: PayloadAction<Partial<ToursState['filters']>>) => {
      state.filters = { ...state.filters, ...action.payload }
    },
    filterTours: (state) => {
      let filtered = [...state.tours]
      
      if (state.filters.city) {
        filtered = filtered.filter(tour => tour.city === state.filters.city)
      }
      
      if (state.filters.category) {
        filtered = filtered.filter(tour => tour.category === state.filters.category)
      }
      
      if (state.filters.search) {
        const search = state.filters.search.toLowerCase()
        filtered = filtered.filter(tour => 
          tour.title.toLowerCase().includes(search) ||
          tour.description.toLowerCase().includes(search)
        )
      }
      
      state.filteredTours = filtered
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
  },
})

export const { setTours, setSelectedTour, setFilters, filterTours, setLoading } = toursSlice.actions
export default toursSlice.reducer


