import { createSlice } from "@reduxjs/toolkit";

import {getTripsThunk} from "../../services/trip-thunks";

const initialState = {
    placesl: [],
    loading: false
}


const placesSlice = createSlice({
    name:'placesl',
    initialState,
    extraReducers: {
        [getTripsThunk.pending]:
            (state) => {
                state.loading = true
                state.placesl = []
            },
        [getTripsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.placesl = payload
            },
        [getTripsThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            }
    },
    reducers: { }

});




export default placesSlice.reducer;