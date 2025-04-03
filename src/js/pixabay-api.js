import axios from "axios";

const API_KEY = "49644584-3a2a1c6d1a84de76c23a0374c";

export function getImagesByQuery(query) {
    return axios("https://pixabay.com/api/?", {
        params: {
            key: API_KEY,
            q: query,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
            per_page: 9,
        }
    })
}