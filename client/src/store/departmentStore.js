import { createSlice } from "@reduxjs/toolkit";
import { getAll, update, deleteObj, getById, create } from "../components/services/departmentsServices"

const initialState = {
    isLoading:false,
    error:"",
    allDepartments:[]

  };
  
  export const departmentSlice = createSlice({
    name: "departments",
    initialState,
    reducers: {},
    extraReducers:{
        [getAll.pending]:(state)=>{
            state.isLoading=true
        },
        [getAll.fulfilled]:(state, action)=>{
            state.isLoading=false
            state.allDepartments=action.payload.departments
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
            state.Department=action.payload.result
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
            state.Department=action.payload.departments
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
            state.Department=action.payload.departments
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
            state.Department=action.payload.department
        },
        [getById.rejected]:(state, action)=>{
            state.isLoading=false
            state.error=action.payload
        },
    }
  })

export const {} = departmentSlice.actions;

export default departmentSlice.reducer;