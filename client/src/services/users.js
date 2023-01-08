const usersApi = `http://localhost:8080/users`;


export const getUsers = async () => {
    try {
        return await fetch(usersApi)
            .then(res => res.json());
    } catch (error) {
        console.error(error);
    }
}