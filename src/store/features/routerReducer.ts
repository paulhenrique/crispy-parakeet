import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface routerState {
  currentRoute: string;
  leftRoute: string
}

const initialState: routerState = {
  currentRoute: '/',
  leftRoute: ''
}

export const routerSlice = createSlice({
  name: 'router',
  initialState,
  reducers: {
    changeRoute: (state: routerState, action: PayloadAction<string>) => {
      state.leftRoute = state.currentRoute
      state.currentRoute = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { changeRoute } = routerSlice.actions

export default routerSlice.reducer