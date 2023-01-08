const lawyersApi = `http://localhost:8080/lawyers`;

export const getLawyers = async () => {
    try {
        return await fetch(lawyersApi)
            .then(res => res.json());
    }
    catch (error) {
        console.error(error);
    }
}