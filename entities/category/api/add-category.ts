import axios from "axios";
import Cookies from "js-cookie";

export async function addCategory(values: any) {
  const accessToken = Cookies.get("accessToken");
  const response = await axios.post(
    "http://localhost:5000/category/add-category",
    values,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return response.data;
}
