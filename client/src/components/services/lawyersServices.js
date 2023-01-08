const basicAPI = "http://localhost:8080/lawyers";

const getAll = async () => {
  return await fetch(`${basicAPI}`)
    .then((res) => res.json())
    .catch((error) => {
      console.log(error);
    });
};

const update = async (lawyer) => {
  return await fetch(`${basicAPI}/byId/${lawyer.id}/update`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: { lawyer },
  })
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((error) => {
      console.log(error);
    });
};

const deleteObj = async (lawyer) => {
  return await fetch(`${basicAPI}/delete`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: { lawyer },
  })
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((error) => {
      console.log(error);
    });
};

const getById = async (lawyer) => {
  return await fetch(`${basicAPI}/byId/${lawyer}`)
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((error) => {
      console.log(error);
    });
};

const create = async (lawyer) => {
  console.log(lawyer);
  return await fetch(`${basicAPI}/create`, {
    method: "POST",
    mode: 'cors',
    cache: 'default',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(lawyer),
  })
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((error) => {
      console.log(error);
    });
};

export { getAll, update, deleteObj, getById, create };
