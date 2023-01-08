const reviewsApi = `http://localhost:8080/reviews`;


export const getReviews = async () => {
    try {
        return await fetch(reviewsApi)
            .then(res => res.json());
    } catch (error) {
        console.error(error);
    }
}