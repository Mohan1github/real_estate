import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    property:[],
    error: false,
    loading : false
}

const propertySlice = createSlice({
    name:"property",
    initialState,
    reducers:{
        getpropertystarting:(state)=>{
            state.error = null;
            state.loading = true
        },
        getproperty:(state,action)=>{ 
            state.property = action.payload;
            state.error = null;
            state.loading = false
        },
        getpropertyfailed:(state)=>{
            state.error = true;
            state.loading = false;
        }
    }
})
export const {getproperty,getpropertyfailed} = propertySlice.actions;
export default propertySlice.reducer;