import { configureStore } from "@reduxjs/toolkit";
import medicalTakingReducer from "../slide/medicalTaking-slice";

const store = configureStore({
  reducer: { 
    medicalTaking: medicalTakingReducer 
  },
});

export default store;
