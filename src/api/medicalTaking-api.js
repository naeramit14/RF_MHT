import axios from "./axios";

export const getNewQuestion = (payload) =>
  axios.post("/history-taking/", payload);
