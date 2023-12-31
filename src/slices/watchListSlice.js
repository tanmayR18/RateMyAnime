import { createSlice } from "@reduxjs/toolkit"

const userFavAnime = localStorage.getItem("toWatchAnime") ? JSON.parse(localStorage.getItem("toWatchAnime")) : [];

export const watchListSlice = createSlice({
    name: "watchList",
    initialState: userFavAnime,
    reducers: {
        add: (state, value) => {
            state.push(value.payload)
            localStorage.setItem("toWatchAnime", JSON.stringify(state))
            // return value.payload
        },
        remove: (state, value) => {
            console.log("Kya aaraaha he ", value.payload)
            console.log("Current state kya he ", state)
            const filteredList = state.filter( (item) => (
                item.mal_id !== value.payload
            ))
            state.splice(0, state.length, ...filteredList);
            localStorage.setItem("toWatchAnime", JSON.stringify(state))
            // return value.payload
        }
    }
})

export const {remove, add} = watchListSlice.actions
export default watchListSlice.reducer