import { createSlice} from "@reduxjs/toolkit";
import tuitsl from "./tuitsl.json";

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa-6.jpg",
    "postimage": "astro.png"
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "comment": 123,
    "retweet": 432,
    "like": 0

}


const tuitslSlice = createSlice({
    name: 'tuitsl',
    initialState: tuitsl,
    reducers: {
        createtuit(state,action) {
            state.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })
        },
        addtuit() {},
        deletetuit(state,action) {
            const index = state.findIndex((tuit) => tuit._id === action.payload);
            state.splice(index,1);
        },
        updatetuit() {},
        liketuit(state,action) {
            const tuitIndex = state.findIndex((tuit) => tuit._id === action.payload._id)
            state[tuitIndex].liked = true;
            state[tuitIndex].like += 1;
        },
        unliketuit(state,action) {
            const tuitIndex = state.findIndex((tuit) => tuit._id === action.payload._id)
            state[tuitIndex].liked = false;
            state[tuitIndex].like -= 1;
        },
        replytuit() {},
        retuittuit() {}
    }
});


export const {addtuit, deletetuit, updatetui, liketuit, unliketuit, replytuit, retuittuit, createtuit } = tuitslSlice.actions
export default tuitslSlice.reducer;