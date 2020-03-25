import { NODE_ENV } from "./env";

export const isDev = NODE_ENV === "development";
export const baseUrl = process.env.REACT_APP_BASE_API;
export const baseApiUrl = `${process.env.REACT_APP_API_URL}/api`;
export const storageKey = "migaocms.token";
