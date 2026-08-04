export function normalizeCategoryName(name: string) {
    return name.trim().toLowerCase().replaceAll(" ", "-");
}