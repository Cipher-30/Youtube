import {configureStore} from "@reduxjs/toolkit";
import sidebarSlice from "./sidebarSlice";
import chatSlice from "./chatSlice";

const appStore = configureStore( {
    
     reducer: {
       sidebar: sidebarSlice,//REDUSER WILL BE ACCESS BY THIS NAME(sidebar)
       chat: chatSlice,
     },

});


export default appStore;