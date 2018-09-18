import jwt from "jsonwebtoken";

export const TOKEN = () =>
  localStorage.getItem(process.env.REACT_APP_MY_TOKEN_KEY);
export const DECODE_TOKEN = () =>
  jwt.verify(TOKEN(), process.env.REACT_APP_DECODE_TOKEN);
