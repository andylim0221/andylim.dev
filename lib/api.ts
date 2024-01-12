import getConfig from "next/config";
import { UserArticlesType, ArticleType } from "../types";
const { serverRuntimeConfig } = getConfig();

const API_KEY = serverRuntimeConfig.apiKey;
const RESUME_URL = serverRuntimeConfig.resumeUrl;
const URL = "https://dev.to/api/articles";
const headers = {
  "api-key": API_KEY,
  "Content-Type": "application/json"
};

const getAllArticles = async () => {
  const response = await fetch(`${URL}/me/all`, { headers });
  return await response.json() as UserArticlesType[];
};

const getArticleById = async (id: string) => {
  const response = await fetch(`${URL}/${id}`, { headers });
  return await response.json() as ArticleType;
};

export { getAllArticles, getArticleById, RESUME_URL };
