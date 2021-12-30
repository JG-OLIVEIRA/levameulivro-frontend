export const isAuthenticated = () => sessionStorage.getItem("token") !== null;
export const getToken = () => sessionStorage.getItem("token");

export function logout() {
  sessionStorage.removeItem("token");
}

export function login(data) {
  sessionStorage.setItem("token", data?.token);
}
