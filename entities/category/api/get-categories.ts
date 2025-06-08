import axios from "axios";
import Cookies from "js-cookie";

export async function getCategories() {
  const accessToken = Cookies.get("accessToken");
  const response = await axios.post(
    "http://localhost:5000/category/get",
    {},
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return response.data;
}
