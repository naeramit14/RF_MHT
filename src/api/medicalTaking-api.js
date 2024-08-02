import axios from "./axios";

export const getNewQuestion = (payload) =>
  axios.post("/history-taking/", payload);

export const getProbableDisease = (payload) =>
  axios.post("/probable-disease/", payload);
