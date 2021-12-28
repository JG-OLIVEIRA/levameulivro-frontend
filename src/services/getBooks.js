import api from "./api";

export default async function getBooks(page, limit) {
  const { data } = await api.get(`/books?page=${page}&limit=${limit}`);

  return data;
}
