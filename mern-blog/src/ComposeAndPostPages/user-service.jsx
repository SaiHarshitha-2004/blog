import { myAxios } from "../Compose/helper";

export const signUp = (user) => {
  return myAxios.post("..Compose/auth/register", user).then((response) => response.data);
};

export const loginUser = (loginDetail) => {
  return myAxios
    .post("..Compose/auth/login", loginDetail)
    .then((response) => response.data);
};

export const getUser = (userId) => {
  return myAxios.get(`/users/${userId}`).then((resp) => resp.data);
};