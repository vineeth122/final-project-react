import {createAsyncThunk} from "@reduxjs/toolkit";

import * as service from "./trip-places"

export const getTripsThunk = createAsyncThunk('trips/getTrips', async () => await service.getnewplaces());