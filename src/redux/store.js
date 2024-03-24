import { configureStore } from "@reduxjs/toolkit";

import contactslice from "./contactsSlice";
import filtersSlice from "./filtersSlice";

export const store = configureStore({
  reducer: {
    contact: contactslice,
    filter: filtersSlice,
  },
});
