import axios from "axios";

const apiHost = process.env.NEXT_PUBLIC_API_HOST;

export const api = axios.create({
  baseURL: apiHost,
});
