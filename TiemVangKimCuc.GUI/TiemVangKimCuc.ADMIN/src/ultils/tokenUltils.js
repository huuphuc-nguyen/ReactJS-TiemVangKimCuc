import { jwtDecode } from "jwt-decode";

export const isTokenValid = (token) => {
    if (!token) return false;

    try {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        const expireTime =  decodedToken.exp;

        if (currentTime > expireTime) {
            localStorage.removeItem('token');
            return false;
        } else {
            return true;
        }
    } catch (error) {
        return false;
    }
};