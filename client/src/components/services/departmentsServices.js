import { createAsyncThunk } from "@reduxjs/toolkit";

const basicAPI = "http://localhost:8080/departments";

const getAll =  createAsyncThunk( "departments/getAll",() => {
  return fetch(`${basicAPI}`)
    .then((res) => res.json())
    .catch((error) => {
      console.log(error);
    });
});

const update = createAsyncThunk("departments/update",(department) => {
  const data=department.data
  return fetch(`${basicAPI}/update/byId/${department.id}`, {
    method: "PUT",
    mode: 'cors',
    cache: 'default',
    headers:{"Content-Type": "application/json"},
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((error) => {
      console.log(error);
    });
})

const deleteObj = createAsyncThunk("departments/deleteObj",(department) => {
  return fetch(`${basicAPI}/delete`, {
    method: "PUT",
    mode: 'cors',
    cache: 'default',
    headers:{"Content-Type": "application/json"},
    body: { department },
  })
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((error) => {
      console.log(error);
    });
});

const getById = createAsyncThunk("departments/getById",(department) => {
  return fetch(`${basicAPI}/byId/${department}`)
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((error) => {
      console.log(error);
    });
});

const create = createAsyncThunk("departments/create",async (department) => {
    return await fetch(`${basicAPI}/create`, {
      method: 'POST',
      mode: 'cors',
      cache: 'default',
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify(department)
    })
      .then((res) => res.json())
      .then((res) => console.log(res, "success"));
  } );

export { getAll, update, deleteObj, getById, create };
