import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
    name: "sideBar",

    initialState:  {
      toggleBar : true,
    } ,

    reducers: {
        toggleSidebar : (state, action) =>
       {
            state.toggleBar = !state.toggleBar; 
       } ,
        closeSideBar : (state) =>
        {
          state.toggleBar = false;
        }

    }
} )



export const{toggleSidebar, closeSideBar} = sidebarSlice.actions;

export default sidebarSlice.reducer;