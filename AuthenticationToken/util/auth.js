import axios from "axios";

const API_KEY = "";

const authentication = async (mode, email, password) => {
  const response = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
  console.log(response.data);
};

export const createUser = async (email, password) => {
  authentication("signUp", email, password);
};
export const login = async (email, password) => {
  authentication("signInWithPassword", email, password);
};
