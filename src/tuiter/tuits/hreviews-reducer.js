import { createSlice } from "@reduxjs/toolkit";
import hreviewsl from "./hreviews.json";

const hreviewsSlice = createSlice({
    name: 'hreviews',
    initialState: hreviewsl
});

export default hreviewsSlice.reducer;
