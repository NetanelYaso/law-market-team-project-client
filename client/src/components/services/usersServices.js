import { createAsyncThunk } from "@reduxjs/toolkit";

const basicAPI = "http://localhost:8080/users";

const update = createAsyncThunk("users/update",(user) => {
  return fetch(`${basicAPI}/byId/${user.id}/update`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
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
    headers: { "Content-Type": "application/json" },
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
    return fetch(`${basicAPI}/logIn__rgister`, {
      method: 'POST',
      mode: 'cors',
      cache: 'default',
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify(user)
    })
      .then((res) => res.json())
      .then((res) => console.log(res, "success"));
  } );

export { update, deleteObj, getById, logInOrRegister };