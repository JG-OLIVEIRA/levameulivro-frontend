import api from "./api";

export default async function getBookById(id) {
  const { data } = await api.get(`/books/${id}`);

  return data;
}
