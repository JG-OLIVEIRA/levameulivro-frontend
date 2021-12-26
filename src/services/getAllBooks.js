import api from "./api";

export default async function getAllBooks() {
  const { data } = await api.get("/books");

  return data;
}
