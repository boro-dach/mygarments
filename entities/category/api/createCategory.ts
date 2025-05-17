import axios from "axios";
import { getCookie } from "cookies-next";

export async function createCategory(title: string) {
  const accessToken = getCookie("accessToken");

  const response = await axios.post("http://localhost:5000/category/create", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    title,
  });
  return response.data;
}
