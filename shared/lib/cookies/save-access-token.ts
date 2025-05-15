import { setCookie } from "cookies-next"; // или другая библиотека для работы с куками

export function saveAccessToken(
  accessToken: string,
  maxAge = 60 * 60 * 24 * 30
) {
  try {
    setCookie("accessToken", accessToken, {
      maxAge,
      path: "/",
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      httpOnly: false,
    });
  } catch (error) {
    console.error("Failed to save accessToken in cookies:", error);
  }
}
