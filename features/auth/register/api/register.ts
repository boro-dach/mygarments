import { saveAccessToken } from "@/shared/lib/cookies/save-access-token";
import axios from "axios";

export async function Register(values: any) {
  try {
    const result = await axios.post(
      `http://localhost:5000/auth/register`,
      values
    );

    if (!result.data.accessToken) {
      throw Error("accessToken not found in response.");
    }
    saveAccessToken(result.data.accessToken);

    return result.data;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
}
