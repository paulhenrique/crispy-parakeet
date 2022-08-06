import { configureStore } from '@reduxjs/toolkit'
import routerReducer from './features/routerReducer'
import userReducer from './features/userReducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage,
}


export const store = configureStore({
  reducer: {
    router: routerReducer,
    users: persistReducer(persistConfig, userReducer)
  },
})

export const persistor = persistStore(store);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch