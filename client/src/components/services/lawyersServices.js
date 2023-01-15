import { createAsyncThunk } from "@reduxjs/toolkit";

const basicAPI = "http://localhost:8080/lawyers";
const getAll =  createAsyncThunk( "lawyers/getAll",(arg,{rejectWithValue}) => {
  return fetch(`${basicAPI}`)
    .then((res) => res.json())
    .catch((error) => {
      rejectWithValue(error)
      console.log(error);
    });
});

const update = createAsyncThunk("lawyers/update",(lawyer) => {
  console.log(lawyer);
  return fetch(`${basicAPI}/update/${lawyer.id}`, {
    method: "PUT",
    cors:"cors",
    headers: { "Content-Type": "application/json" },
    body: { avatar:lawyer.avatar },
  })
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((error) => {
      console.log(error);
    });
})

const deleteObj = createAsyncThunk("lawyers/deleteObj",(lawyer) => {
  return fetch(`${basicAPI}/delete`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: { lawyer },
  })
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((error) => {
      console.log(error);
    });
});

const getById = createAsyncThunk("lawyers/getById",(lawyer) => {
  return fetch(`${basicAPI}/byId/${lawyer}`)
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((error) => {
      console.log(error);
    });
});

const create = createAsyncThunk("lawyers/create",async (lawyer) => {
    return await fetch(`${basicAPI}/create`, {
      method: 'POST',
      mode: 'cors',
      cache: 'default',
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify(lawyer)
    })
      .then((res) => res.json())
      .then((res) => console.log(res, "success"));
  } );

export { getAll, update, deleteObj, getById, create };
