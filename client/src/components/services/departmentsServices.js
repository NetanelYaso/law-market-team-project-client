const basicAPI = "http://localhost:8080/departments";

const getAll = async () => {
  return await fetch(`${basicAPI}`)
    .then((res) => res.json())
    .catch((error) => {
      console.log(error);
    });
};

const update = async (department) => {
  return await fetch(`${basicAPI}/byId/${department.id}/update`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: { department },
  })
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((error) => {
      console.log(error);
    });
};

const deleteObj = async (department) => {
  return await fetch(`${basicAPI}/delete`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: { department },
  })
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((error) => {
      console.log(error);
    });
};

const getById = async (department) => {
  return await fetch(`${basicAPI}/byId/${department}`)
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((error) => {
      console.log(error);
    });
};

const create = async (department) => {
  debugger
    return await fetch(`${basicAPI}/create`, {
      method: 'POST',
      mode: 'cors',
      cache: 'default',
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify(department)
    })
      .then((res) => res.json())
      .then((res) => console.log(res, "success"));
  } ;

export { getAll, update, deleteObj, getById, create };
