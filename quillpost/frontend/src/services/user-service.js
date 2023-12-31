import { myAuthAxios } from "./helper";
import { BASE_URL_AUTH } from "./helper";

export const SignUp = (user) => {
    return myAuthAxios
        .post(BASE_URL_AUTH+'/register', user)
        .then((response) => response.data)
};

export const loginUser = (loginDetails) => {
    return myAuthAxios
        .post(BASE_URL_AUTH+'/login', loginDetails)
        .then((response) => response.data)
}