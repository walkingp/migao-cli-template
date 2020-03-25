import { storageKey } from "../config/config";

export const getToken = () => {
  return localStorage.getItem(storageKey);
};

export const setToken = (token: string) => {
  return localStorage.setItem(storageKey, token);
};

export const isLogined = () => {
  return localStorage.getItem(storageKey);
};
