import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies: null,
        trailerVideo: null
    },
    reducers:{
        addNowplayingMovies:(state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTrailerVideo:(state, action)=>{
            state.trailerVideo = action.payload;
        },
    },
});

export const {addNowplayingMovies,addTrailerVideo,addPopularMovies} = moviesSlice.actions;

export default moviesSlice.reducer;