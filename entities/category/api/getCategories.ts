import axios from "axios";
import { getCookie } from "cookies-next";

export async function getCategories() {
  const accessToken = getCookie("accessToken");

  const response = await axios.get("http://localhost:5000/category/get", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
}
