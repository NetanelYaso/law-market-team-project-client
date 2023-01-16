import { createAsyncThunk } from "@reduxjs/toolkit";

const basicAPI = "http://localhost:8080/users";

const update = createAsyncThunk("users/update",(user) => {
  return fetch(`${basicAPI}/byId/${user.id}/update`, {
    method: "PUT",
    mode: 'cors',
    cache: 'default',
    headers:{"Content-Type": "application/json"},
    body: { user },
  })
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((error) => {
      console.log(error);
    });
})

const deleteObj = createAsyncThunk("users/deleteObj",(user) => {
  return fetch(`${basicAPI}/delete`, {
    method: "PUT",
    mode: 'cors',
    cache: 'default',
    headers:{"Content-Type": "application/json"},
    body: { user },
  })
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((error) => {
      console.log(error);
    });
});

const getById = createAsyncThunk("users/getById",(user) => {
  return fetch(`${basicAPI}/byId/${user}`)
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((error) => {
      console.log(error);
    });
});

const logInOrRegister = createAsyncThunk("users/logInOrRegister",(user) => {
   console.log(user);
  return fetch(`${basicAPI}/logIn__register`, {
      method: 'POST',
      mode: 'cors',
      cache: 'default',
      headers:{"Content-Type": "application/json"},
      body:JSON.stringify(user)
    })
      .then((res) => res.json())
      .then((res) => console.log(res, "success"))
      .catch((res) => console.log(res, "false"));

  } );

export { update, deleteObj, getById, logInOrRegister };