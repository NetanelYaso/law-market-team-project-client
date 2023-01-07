const ordersApi = `http://localhost:8080/orders`;


export const getOrders = async () => {
    try {
        return await fetch(ordersApi)
            .then(res => res.json());
    } catch (error) {
        console.error(error);
    }
}