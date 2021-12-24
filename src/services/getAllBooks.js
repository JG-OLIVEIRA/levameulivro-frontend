import api from "./api";

export default async () => {
  const { data } = await api.get("/books");

  return data;
};
