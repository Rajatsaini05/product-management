import { createSlice } from "@reduxjs/toolkit";

const teamSlice = createSlice({
  name: "teams",
  initialState: {
    list: [],
  },
  reducers: {
    setTeams: (state, action) => {
      state.list = action.payload;
    },
    addTeam: (state, action) => {
      state.list.push(action.payload);
    },
    removeTeam: (state, action) => {
      state.list = state.list.filter((t) => t._id !== action.payload);
    },
    updateTeamList: (state, action) => {
      const index = state.list.findIndex((t) => t._id === action.payload._id);
      if (index !== -1) {
        state.list[index] = action.payload;
      }
    },
  },
});

export const { setTeams, addTeam, removeTeam, updateTeamList } =
  teamSlice.actions;
export default teamSlice.reducer;
