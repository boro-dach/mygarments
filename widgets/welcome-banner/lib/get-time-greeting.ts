export function getTimeGreeting(): string {
  const hour = new Date().getHours();

  if (hour < 12) return "Проснись и пой";
  if (hour < 18) return "Продуктивного дня";
  return "Теплого вечера";
}
