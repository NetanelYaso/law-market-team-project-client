const departmentsApi = `http://localhost:8080/departments`;


export const getDepartments = async () => {
    try {
        return await fetch(departmentsApi)
            .then(res => res.json());
    } catch (error) {
        console.error(error);
    }
}