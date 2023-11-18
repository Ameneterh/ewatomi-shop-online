import { combinedReducers, configureStore } from "@reduxjs/toolkit";
import { userReduder } from "./user/userSlice";
import { persistedReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combinedReducers({ user: userReduder });

const persistConfig = {
  key: "root",
  storage,
  version: 1,
};
const persistedReducer = persistedReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;
