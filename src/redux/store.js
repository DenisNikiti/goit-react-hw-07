import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
  persistReducer,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactslice from "./contactsSlice";
import filtersSlice from "./filtersSlice";

const contactPersistConfig = {
  key: "contacts",
  storage,
};

const persistedReducer = persistReducer(contactPersistConfig, contactslice);

export const store = configureStore({
  reducer: {
    contact: persistedReducer,
    filter: filtersSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
