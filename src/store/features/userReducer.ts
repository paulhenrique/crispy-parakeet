import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '../../types';

export interface userState {
  currentUser: User | null ;
}

const initialState: userState = {
  currentUser: null
}

export const userSlice = createSlice({
  name: 'router',
  initialState,
  reducers: {
    doLogin: (state: userState, action: PayloadAction<User>) => {
      state.currentUser = action.payload
    },
    doLogout: (state: userState) => {
      state.currentUser = null
    }
  },
})

// Action creators are generated for each case reducer function
export const { doLogin, doLogout } = userSlice.actions

export default userSlice.reducer