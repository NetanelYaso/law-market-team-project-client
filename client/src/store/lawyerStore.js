import { createSlice } from "@reduxjs/toolkit";
import { getAll, update, deleteObj, getById, create } from "../components/services/lawyersServices"

const initialState = {
    isLoading:false,
    error:"",
    allLawyers:[],
    chosenLawyerIndex:{}
  };
  
  export const lawyersSlice = createSlice({
    name: "lawyers",
    initialState,
    reducers: {
        choseLawyer:(state,action)=>{
            state.chosenLawyerIndex=action.payload
        }
    },
    extraReducers:{
        [getAll.pending]:(state)=>{
            state.isLoading=true
        },
        [getAll.fulfilled]:(state, action)=>{
            state.isLoading=false
            state.allLawyers=action.payload.lawyers
        },
        [getAll.rejected]:(state, action)=>{
            state.isLoading=false
            state.error=action.payload
        },
        [create.pending]:(state)=>{
            state.isLoading=true
        },
        [create.fulfilled]:(state, action)=>{
            state.isLoading=false
            state.lawyer=action.payload.result
        },
        [create.rejected]:(state, action)=>{
            state.isLoading=false
            state.error=action.payload
        },
        [update.pending]:(state)=>{
            state.isLoading=true
        },
        [update.fulfilled]:(state, action)=>{
            state.isLoading=false
            state.lawyer=action.payload.lawyers
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
            state.lawyer=action.payload.lawyers
        },
        [deleteObj.rejected]:(state, action)=>{
            state.isLoading=false
            state.error=action.payload
        },
        [getById.pending]:(state)=>{
            state.isLoading=true
        },
        [getById.fulfilled]:(state, action)=>{
            state.isLoading=false
            state.lawyer=action.payload.lawyer
        },
        [getById.rejected]:(state, action)=>{
            state.isLoading=false
            state.error=action.payload
        },
    }
  })

export const {choseLawyer} = lawyersSlice.actions;

export default lawyersSlice.reducer;