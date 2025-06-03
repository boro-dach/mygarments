import { saveAccessToken } from "@/shared/lib/cookies/save-access-token";
import axios from "axios";
import { toast } from "sonner";
export async function Login(values: any) {
  try {
    const response = await axios.post(
      `http://localhost:5000/auth/login`,
      values);

    if (!response.data.accessToken) {
      throw Error("accessToken not found in response.");
    }
    saveAccessToken(response.data.accessToken);

    toast.success("Успешный вход!");
    return response.data;
  } catch (error: any) {
    const message = error?.response?.data?.message || "Неизвестная ошибка";
    toast.error(`Ошибка входа: ${message}`);
    throw error;
  }
}
