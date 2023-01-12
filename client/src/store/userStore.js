import { createSlice } from "@reduxjs/toolkit";
import { update, deleteObj, getById, logInOrRegister } from "../components/services/usersServices"

const initialState = {
    isLoading: false,
  };
  
  export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        logOut:(state)=>{
        }
    },
    extraRducer:{
        [logInOrRegister.pending]:(state)=>{
            state.isLoading=true
        },
        [logInOrRegister.fulfilled]:(state, action)=>{
            state.isLoading=false
            state.user=action.payload.users
        },
        [logInOrRegister.rejected]:(state, action)=>{
            state.isLoading=false
            state.error=action.payload
        },
        [getById.pending]:(state)=>{
            state.isLoading=true
        },
        [getById.fulfilled]:(state, action)=>{
            state.isLoading=false
            state.user=action.payload.result
        },
        [getById.rejected]:(state, action)=>{
            state.isLoading=false
            state.error=action.payload
        },
        [update.pending]:(state)=>{
            state.isLoading=true
        },
        [update.fulfilled]:(state, action)=>{
            state.isLoading=false
            state.user=action.payload.users
        },
        [update.rejected]:(state, action)=>{
            state.isLoading=false
            state.error=action.payload
        },
        [deleteObj.pending]:(state)=>{
            state.isLoading=true
        },
        [deleteObj.fulfilled]:(state, action)=>{
            state.isLoading=false
            state.user=action.payload.users
        },
        [deleteObj.rejected]:(state, action)=>{
            state.isLoading=false
            state.error=action.payload
        },
    }
  })

export const {} = usersSlice.actions;

export default usersSlice.reducer;