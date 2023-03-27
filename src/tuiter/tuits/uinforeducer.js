import { createSlice} from "@reduxjs/toolkit";
import usersl from "./usersl.json";


const userslSlice = createSlice({
    name: 'usersl',
    initialState: usersl,
    reducers: {
        changeInfo(state,action){
            state.userName = action.payload.username;
            state.bio = action.payload.bio;
            state.location = action.payload.location;
            state.website = action.payload.website;
            state.dateOfBirth =action.payload.dateOfBirth;
        }
    }
    }
)


export const {changeInfo} = userslSlice.actions;
export default userslSlice.reducer;