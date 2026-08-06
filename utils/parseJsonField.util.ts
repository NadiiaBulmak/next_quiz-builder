export const parseJsonField = <T>(
  value: FormDataEntryValue | null,
): T | null => {
  if (typeof value !== 'string' || !value.trim()) return null;

  try {
    return JSON.parse(value) as T;
  } catch {
    return null;
  }
};
