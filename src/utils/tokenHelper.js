//src/utils/HelperFunctions.js
// export const getToken = () => {
//     const now = new Date(Date.now()).getTime();
//     const timeAllowed = 1000 * 120 * 30;
//     const timeSinceLastLogin = now - localStorage.getItem('lastLoginTime');
//     if (timeSinceLastLogin < timeAllowed) {
//         return localStorage.getItem('token');
//     }
// };
export const getToken = () => {
    return localStorage.getItem('token');
};
export const removeToken = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('lastLoginTime');
};
export const setToken = (val) => {
    localStorage.setItem('token', val);
    localStorage.setItem('lastLoginTime', new Date(Date.now()).getTime());
};
