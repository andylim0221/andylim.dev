const dotenv = require("dotenv").config();
const API_KEY = process.env.API_KEY;
const URL = "https://dev.to/api/articles";
const headers = {
    "api-key": API_KEY,
};

const getAllArticles = async () => {
    const response = await fetch(`${URL}/me/all`, { headers });
    return response.json();
};

const getArticleById = async (id) => {
    const response = await fetch(`${URL}/${id}`, { headers });
    return response.json();
};

export { getAllArticles, getArticleById };
