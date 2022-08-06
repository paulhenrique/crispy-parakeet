import { configureStore } from '@reduxjs/toolkit'
import routerReducer from './features/routerReducer'
import userReducer from './features/userReducer'

export const store = configureStore({
  reducer: {
    router: routerReducer,
    users: userReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch