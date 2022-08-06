import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface userState {
  currentRoute: string;
  leftRoute: string
}

const initialState: userState = {
  currentRoute: '/',
  leftRoute: ''
}

export const routerSlice = createSlice({
  name: 'router',
  initialState,
  reducers: {
    changeRoute: (state: userState, action: PayloadAction<string>) => {
      state.leftRoute = state.currentRoute
      state.currentRoute = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { changeRoute } = routerSlice.actions

export default routerSlice.reducer