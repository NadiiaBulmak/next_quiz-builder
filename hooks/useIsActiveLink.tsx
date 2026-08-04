import { usePathname } from "next/navigation";

export const useIsActiveLink = (link: string) => {
  const pathname = usePathname();

  return pathname === link;
};