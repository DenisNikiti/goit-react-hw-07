import { createSlice } from "@reduxjs/toolkit";
import data from "../data.json";
import { nanoid } from "nanoid";

const contactslice = createSlice({
  name: "contacts",
  initialState: {
    items: data,
  },
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare: (value) => {
        return {
          payload: {
            ...value,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});
export const contactsSelector = (state) => state.contact.items;

export const { addContact, deleteContact } = contactslice.actions;
export default contactslice.reducer;
