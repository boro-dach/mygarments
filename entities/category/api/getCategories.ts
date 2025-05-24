// @/entities/category/api/getCategories.ts
import axios, { AxiosError } from "axios";
import { getCookie } from "cookies-next";

interface CategoryItem {
  id: string | number;
  title: string;
  amount: number;
  count: number;
  // ... другие поля
}

export async function getCategories(): Promise<CategoryItem[]> {
  const accessToken = getCookie("accessToken"); // Это будет работать только на клиенте, если getCookie вызывается в клиентском компоненте

  // Если getCategories вызывается через useQuery (клиентский хук),
  // то getCookie будет выполняться на клиенте.
  // Если вы планируете SSR с React Query, получение cookie на сервере потребует другого подхода.

  if (!accessToken) {
    // Для useQuery лучше бросить ошибку, чтобы isError и error были установлены
    console.warn("getCategories: No access token found.");
    throw new Error("Authentication token not found");
  }

  try {
    const response = await axios.get<CategoryItem[]>(
      "http://localhost:5000/category/get",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    // Убедимся, что данные - это массив
    if (Array.isArray(response.data)) {
      return response.data;
    } else {
      console.error(
        "API did not return an array for categories:",
        response.data
      );
      throw new Error("API response for categories was not an array.");
    }
  } catch (error) {
    // Логируем и перебрасываем ошибку, чтобы React Query мог ее обработать
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      console.error(
        "Error fetching categories (Axios):",
        axiosError.response?.status,
        axiosError.message,
        axiosError.response?.data
      );
    } else {
      console.error("Unexpected error fetching categories:", error);
    }
    throw error; // Важно перебросить ошибку
  }
}
