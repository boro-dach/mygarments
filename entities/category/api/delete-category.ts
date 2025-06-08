import axios from "axios";
import Cookies from "js-cookie";

export async function deleteCategory(categoryId: string) {
  const accessToken = Cookies.get("accessToken");
  const payload = {
    id: categoryId,
  };

  const response = await axios.post(
    "http://localhost:5000/category/delete",
    payload,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return response.data;
}
